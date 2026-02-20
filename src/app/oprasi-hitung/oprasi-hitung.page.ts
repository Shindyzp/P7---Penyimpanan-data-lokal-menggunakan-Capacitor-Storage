import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-oprasi-hitung',
  templateUrl: './oprasi-hitung.page.html',
  styleUrls: ['./oprasi-hitung.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton,
    IonIcon, IonButtons, IonBackButton, IonList, IonItem, IonLabel
  ]
})
export class OprasiHitungPage {
  number1: number | null = null;
  number2: number | null = null;
  results: {
    addition?: number;
    subtraction?: number;
    multiplication?: number;
    division?: number | string;
  } | null = null;
  errorMessage: string = '';

  constructor() { }

  calculate() {
    this.errorMessage = '';
    this.results = null;

    if (this.number1 === null || this.number2 === null) {
      this.errorMessage = 'Silakan masukkan kedua angka.';
      return;
    }

    const n1 = this.number1;
    const n2 = this.number2;

    this.results = {
      addition: n1 + n2,
      subtraction: n1 - n2,
      multiplication: n1 * n2,
      division: n2 !== 0 ? n1 / n2 : 'Tidak terdefinisi (pembagian dengan nol)'
    };
  }
}
