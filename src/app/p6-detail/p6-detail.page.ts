import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-p6-detail',
  templateUrl: './p6-detail.page.html',
  styleUrls: ['./p6-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonBackButton, IonCard, IonCardHeader, IonCardTitle, 
    IonCardContent, IonIcon, IonText, CommonModule
  ]
})
export class P6DetailPage implements OnInit {
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

  detailMahasiswa: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      // Menggunakan == untuk mencocokkan ID secara aman
      this.detailMahasiswa = this.dataTeman.find(mhs => mhs.id == Number(idParam));
    }
  }
}