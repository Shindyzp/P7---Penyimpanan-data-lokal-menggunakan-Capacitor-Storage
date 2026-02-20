import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class DataMahasiswaP7Service {

  private KEY = 'data_mahasiswa_p7';

  async getData() {
    const { value } = await Preferences.get({ key: this.KEY });
    return value ? JSON.parse(value) : [];
  }

  async tambahData(dataBaru: any) {
    const dataLama = await this.getData();
    dataBaru.id = Date.now();
    dataLama.push(dataBaru);

    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(dataLama)
    });
  }

  async hapusData(id: number) {
    const dataLama = await this.getData();
    const dataBaru = dataLama.filter((item: any) => item.id !== id);

    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(dataBaru)
    });
  }

  // ✅ FUNGSI BARU: UPDATE DATA
  async updateData(dataUpdate: any) {
    const dataLama = await this.getData();

    const dataBaru = dataLama.map((item: any) => {
      if (item.id === dataUpdate.id) {
        return dataUpdate;
      }
      return item;
    });

    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(dataBaru)
    });
  }
}
