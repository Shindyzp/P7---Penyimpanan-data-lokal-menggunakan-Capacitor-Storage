// ionic-ui-components\src\app\home\home.page.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, 
  IonCard, IonCardContent, IonGrid, IonRow, IonCol, 
  IonText,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { 
  calculatorOutline, 
  fitnessOutline, 
  gitCompareOutline, 
  addCircleOutline, 
  peopleOutline, 
  chevronForwardOutline, 
  sparklesOutline,
  saveOutline,
  personCircleOutline   // ✅ ICON ABOUT
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, 
    IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonText,
    IonButton,
    IonButtons,
    CommonModule, FormsModule, RouterModule
  ]
})
export class HomePage {

  menuItems = [
    { 
      title: 'Deret Bilangan Prima', 
      path: '/deret-bilangan-prima', 
      description: 'Cari deret bilangan prima.', 
      icon: 'calculator-outline', 
      color: '#4e73df' 
    },
    { 
      title: 'Hitung Berat Badan', 
      path: '/hitung-berat-badan', 
      description: 'Kalkulator IMT ideal.', 
      icon: 'fitness-outline', 
      color: '#1cc88a' 
    },
    { 
      title: 'Hitung Ganjil Genap', 
      path: '/hitung-ganjil-genap', 
      description: 'Cek jenis bilangan.', 
      icon: 'git-compare-outline', 
      color: '#36b9cc' 
    },
    { 
      title: 'Operasi Hitung', 
      path: '/oprasi-hitung', 
      description: 'Kalkulasi aritmatika.', 
      icon: 'add-circle-outline', 
      color: '#f6c23e' 
    },
    { 
      title: 'Detail Mahasiswa', 
      path: '/daftar-mahasiswa', 
      description: 'Data 10 Mahasiswa IT.', 
      icon: 'people-outline', 
      color: '#e74a3b' 
    },
    { 
      title: 'P7 Penyimpanan Data', 
      path: '/p7-storage', 
      description: 'Local Storage dengan Capacitor.', 
      icon: 'save-outline', 
      color: '#6f42c1' 
    },

    // ✅ MENU ABOUT
    { 
      title: 'About', 
      path: '/about', 
      description: 'Informasi pengembang aplikasi.', 
      icon: 'person-circle-outline', 
      color: '#20c997' 
    }
  ];

  constructor() {
    addIcons({ 
      calculatorOutline, 
      fitnessOutline, 
      gitCompareOutline, 
      addCircleOutline, 
      peopleOutline, 
      chevronForwardOutline, 
      sparklesOutline,
      saveOutline,
      personCircleOutline   // ✅ WAJIB TAMBAH DI SINI
    });
  }
}
