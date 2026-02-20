import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonList, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout-dasar',
  templateUrl: './layout-dasar.page.html',
  styleUrls: ['./layout-dasar.page.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonLabel, IonList, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LayoutDasarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}