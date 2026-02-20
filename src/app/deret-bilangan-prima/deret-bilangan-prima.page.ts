import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBackButton,
  IonButtons,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-deret-bilangan-prima',
  templateUrl: './deret-bilangan-prima.page.html',
  styleUrls: ['./deret-bilangan-prima.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonBackButton, IonButtons, IonInput, IonButton, IonIcon
  ]
})
export class DeretBilanganPrimaPage {
  
  nimInput: string = ''; // Untuk menampung input NIM dari pengguna
  calculatedLimit: number | null = null; // Untuk menampilkan batas yang dihitung
  primes: number[] = []; // Array untuk hasil
  errorMessage: string = ''; // Pesan error

  constructor() { }

  // Fungsi ini dipanggil saat tombol ditekan
  generatePrimesFromNim() {
    this.errorMessage = '';
    this.primes = [];
    this.calculatedLimit = null;

    // 1. Validasi input NIM
    if (!this.nimInput || this.nimInput.length < 2) {
      this.errorMessage = 'Silakan masukkan NIM yang valid (minimal 2 digit).';
      return;
    }

    // 2. Ambil 2 digit terakhir dan hitung batasnya
    const lastTwoDigits = this.nimInput.slice(-2);
    const lastTwoDigitsAsNumber = parseInt(lastTwoDigits, 10);
    
    // Cek apakah 2 digit terakhir adalah angka yang valid
    if (isNaN(lastTwoDigitsAsNumber)) {
        this.errorMessage = 'Dua digit terakhir dari NIM harus berupa angka.';
        return;
    }

    this.calculatedLimit = lastTwoDigitsAsNumber + 10;

    // 3. Hasilkan deret prima sampai batas tersebut
    for (let i = 2; i <= this.calculatedLimit; i++) {
      if (this.isPrime(i)) {
        this.primes.push(i);
      }
    }
  }

  // Fungsi sederhana untuk mengecek apakah sebuah angka prima
  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
