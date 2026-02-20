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
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-hitung-ganjil-genap',
  templateUrl: './hitung-ganjil-genap.page.html',
  styleUrls: ['./hitung-ganjil-genap.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton,
    IonIcon, IonButtons, IonBackButton
  ]
})
export class HitungGanjilGenapPage {
  inputNumber: number | null = null;
  resultMessage: string = '';
  resultType: 'ganjil' | 'genap' | '' = '';

  constructor() { }

  checkNumber() {
    this.resultMessage = '';
    this.resultType = '';

    if (this.inputNumber === null || isNaN(this.inputNumber)) {
      this.resultMessage = 'Silakan masukkan angka yang valid.';
      return;
    }

    if (this.inputNumber % 2 === 0) {
      this.resultMessage = `Angka ${this.inputNumber} adalah Genap.`;
      this.resultType = 'genap';
    } else {
      this.resultMessage = `Angka ${this.inputNumber} adalah Ganjil.`;
      this.resultType = 'ganjil';
    }
  }
}
