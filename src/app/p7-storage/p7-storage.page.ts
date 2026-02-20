import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonLabel, IonInput,
  IonButton,
  IonToast,
  IonCard, IonCardContent,
  IonButtons, IonBackButton
} from '@ionic/angular/standalone';

import { DataMahasiswaP7Service } from '../services/data-mahasiswa-p7.service';

@Component({
  selector: 'app-p7-storage',
  templateUrl: './p7-storage.page.html',
  styleUrls: ['./p7-storage.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonLabel, IonInput,
    IonButton,
    IonToast,
    IonCard, IonCardContent,
    IonButtons, IonBackButton,
    CommonModule, FormsModule
  ]
})
export class P7StoragePage {

  // FORM MODEL
  nama = '';
  nim = '';
  jurusan = '';

  // DATA
  dataMahasiswa: any[] = [];

  // EDIT STATE
  editMode = false;
  selectedId: number | null = null;

  // UI STATE
  isLoading = false;
  isToastOpen = false;
  toastMessage = '';

  constructor(private dataService: DataMahasiswaP7Service) {}

  async ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    this.isLoading = true;
    this.dataMahasiswa = await this.dataService.getData();
    this.isLoading = false;
  }

  async simpanAtauUpdate() {

    // VALIDASI FIELD KOSONG
    if (!this.nama || !this.nim || !this.jurusan) {
      this.toastMessage = 'Semua field wajib diisi!';
      this.isToastOpen = true;
      return;
    }

    // VALIDASI NIM HARUS ANGKA
    const hanyaAngka = /^[0-9]+$/;
    if (!hanyaAngka.test(this.nim)) {
      this.toastMessage = 'NIM harus berupa angka saja!';
      this.isToastOpen = true;
      return;
    }

    if (this.editMode && this.selectedId !== null) {

      // UPDATE DATA
      await this.dataService.updateData({
        id: this.selectedId,
        nama: this.nama,
        nim: this.nim,
        jurusan: this.jurusan
      });

      this.toastMessage = 'Data berhasil diupdate!';

    } else {

      // TAMBAH DATA
      await this.dataService.tambahData({
        nama: this.nama,
        nim: this.nim,
        jurusan: this.jurusan
      });

      this.toastMessage = 'Data berhasil disimpan!';
    }

    this.isToastOpen = true;

    this.resetForm();
    this.loadData();
  }

  editData(data: any) {
    this.nama = data.nama;
    this.nim = data.nim;
    this.jurusan = data.jurusan;

    this.selectedId = data.id;
    this.editMode = true;
  }

  async hapus(id: number) {
    const konfirmasi = confirm('Yakin ingin menghapus data ini?');
    if (!konfirmasi) return;

    await this.dataService.hapusData(id);
    this.loadData();
  }

  resetForm() {
    this.nama = '';
    this.nim = '';
    this.jurusan = '';
    this.editMode = false;
    this.selectedId = null;
  }
}
