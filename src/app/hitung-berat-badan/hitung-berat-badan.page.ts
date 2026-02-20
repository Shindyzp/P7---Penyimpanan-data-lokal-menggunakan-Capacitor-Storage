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
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-hitung-berat-badan',
  templateUrl: './hitung-berat-badan.page.html',
  styleUrls: ['./hitung-berat-badan.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton,
    IonIcon, IonRadioGroup, IonRadio, IonLabel, IonItem, IonButtons, IonBackButton
  ]
})
export class HitungBeratBadanPage {
  height: number | null = null;
  gender: 'pria' | 'wanita' = 'pria';
  idealWeight: number | null = null;
  errorMessage: string = '';

  constructor() { }

  calculateIdealWeight() {
    this.errorMessage = '';
    this.idealWeight = null;

    if (!this.height || this.height <= 0) {
      this.errorMessage = 'Silakan masukkan tinggi badan yang valid.';
      return;
    }

    let calculatedWeight = 0;
    const baseCalculation = this.height - 100;

    if (this.gender === 'pria') {
      // Rumus Broca untuk Pria
      calculatedWeight = baseCalculation * 0.9;
    } else {
      // Rumus Broca untuk Wanita
      calculatedWeight = baseCalculation * 0.85;
    }
    
    this.idealWeight = parseFloat(calculatedWeight.toFixed(2));
  }
}
