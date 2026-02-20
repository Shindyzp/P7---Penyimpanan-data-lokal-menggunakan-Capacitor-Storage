import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonItem, IonLabel,
  IonButtons, IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonItem, IonLabel,
    IonButtons, IonBackButton,
    CommonModule
  ]
})
export class AboutPage {

  // BIODATA
  nama = 'Shindy Zhaski Pradita';
  nim = '220511004';
  prodi = 'Teknik Informatika';
  universitas = 'Universitas Muhammadiyah Cirebon';
  mataKuliah = 'Pemrograman Bergerak';
  dosen = 'Rosidin, S.Kom., M.Kom.';
  semester = 'Semester 7';
  versiAplikasi = '1.0.0';

}
