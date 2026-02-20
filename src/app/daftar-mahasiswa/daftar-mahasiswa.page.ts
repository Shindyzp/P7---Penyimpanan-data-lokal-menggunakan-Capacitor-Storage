import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Wajib untuk [(ngModel)]
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonSearchbar 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-daftar-mahasiswa',
  templateUrl: './daftar-mahasiswa.page.html',
  styleUrls: ['./daftar-mahasiswa.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonSearchbar,
    CommonModule, RouterModule, FormsModule
  ]
})
export class DaftarMahasiswaPage implements OnInit {
  // Data master 10 mahasiswa sesuai permintaan
  dataTeman = [
    { id: 1, nama: 'shindy zp', prodi: 'IT' },
    { id: 2, nama: 'tiara azzahra', prodi: 'IT' },
    { id: 3, nama: 'syahrani', prodi: 'IT' },
    { id: 4, nama: 'rihhadatul', prodi: 'IT' },
    { id: 5, nama: 'vina pikria', prodi: 'IT' },
    { id: 6, nama: 'serly nefriady', prodi: 'IT' },
    { id: 7, nama: 'shifa maharani', prodi: 'IT' },
    { id: 8, nama: 'safa rizky', prodi: 'IT' },
    { id: 9, nama: 'sonia', prodi: 'IT' },
    { id: 10, nama: 'safira', prodi: 'IT' },
  ];

  public results = [...this.dataTeman]; // Data yang akan ditampilkan setelah filter
  public searchTerm: string = '';

  constructor() {
    addIcons({ chevronForwardOutline });
  }

  ngOnInit() {}

  // Logika Filter Pencarian
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.dataTeman.filter((d) => d.nama.toLowerCase().indexOf(query) > -1);
  }

  getRandomColor(name: string): string {
    const colors = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#6f42c1'];
    return colors[name.length % colors.length];
  }
}