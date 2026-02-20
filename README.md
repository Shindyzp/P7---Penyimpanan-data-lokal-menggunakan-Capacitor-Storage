# Ionic UI Components – Pemrograman Bergerak

Aplikasi mobile berbasis **Ionic + Angular (Standalone Components)**  
Dikembangkan sebagai tugas praktikum mata kuliah **Pemrograman Bergerak**.

---

## 👩‍💻 Informasi Pengembang

- **Nama:** Shindy Zhaski Pradita  
- **NIM:** 220511004  
- **Program Studi:** Teknik Informatika  
- **Universitas:** Universitas Muhammadiyah Cirebon  
- **Semester:** 7  
- **Dosen Pengampu:** Rosidin, S.Kom., M.Kom.

---

## 📱 Fitur Aplikasi

Aplikasi ini terdiri dari beberapa fitur praktikum:

### 1️⃣ Deret Bilangan Prima
Menampilkan deret bilangan prima berdasarkan input batas angka.

### 2️⃣ Hitung Berat Badan (IMT)
Menghitung Indeks Massa Tubuh (BMI) dan menampilkan kategorinya.

### 3️⃣ Hitung Ganjil Genap
Menentukan apakah suatu bilangan termasuk ganjil atau genap.

### 4️⃣ Operasi Hitung
Kalkulator sederhana untuk operasi aritmatika dasar.

### 5️⃣ Detail Mahasiswa
Menampilkan data statis mahasiswa.

### 6️⃣ P7 – Penyimpanan Data Lokal (Capacitor Preferences)
Fitur CRUD data mahasiswa menggunakan:

- `@capacitor/preferences`
- Service terpisah (DataMahasiswaP7Service)
- JSON.stringify() & JSON.parse()
- Penyimpanan berbasis key-value
- Data tidak hilang saat refresh

#### Fitur dalam P7:
- Tambah data
- Edit data
- Hapus data
- Validasi NIM (hanya angka)
- Toast notifikasi
- Back button navigation

---

## 🛠 Teknologi yang Digunakan

- Ionic Framework
- Angular (Standalone Components)
- TypeScript
- SCSS
- Capacitor Preferences

---

## 📂 Struktur Penting Project


---

## 🔐 Keamanan Data (P7)

Data disimpan menggunakan Capacitor Preferences (Key-Value Storage).

⚠ Catatan:
Data sensitif seperti password tidak boleh disimpan dalam bentuk plain text.  
Untuk data sensitif sebaiknya menggunakan enkripsi atau autentikasi berbasis server.

---

## 🚀 Cara Menjalankan Project

### Prerequisites
Pastikan sudah install:
- **Node.js** (v16+): [nodejs.org](https://nodejs.org)
- **npm** atau **yarn** (biasanya terinstall otomatis dengan Node.js)
- **Ionic CLI**: 
  ```bash
  npm install -g @ionic/cli
  ```
- **Git** (untuk clone): [git-scm.com](https://git-scm.com)

### Langkah Instalasi & Menjalankan

1. **Clone repository dari GitHub**
   ```bash
   git clone https://github.com/Shindyzp/P7---Penyimpanan-data-lokal-menggunakan-Capacitor-Storage.git
   cd ionic-ui-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   ionic serve
   ```
   Aplikasi akan membuka di browser `http://localhost:8100`

4. **Untuk testing di Android emulator/device**
   ```bash
   # Build untuk Android
   npm run build
   ionic capacitor add android
   ionic capacitor open android
   # Kemudian build dan run via Android Studio
   ```

5. **Untuk testing di iOS (Mac only)**
   ```bash
   ionic capacitor add ios
   ionic capacitor open ios
   # Kemudian build dan run via Xcode
   ```

### Struktur Project
```
src/
├── app/
│   ├── about/                    # Halaman About
│   ├── daftar-mahasiswa/         # Data Mahasiswa
│   ├── deret-bilangan-prima/     # Fitur Bilangan Prima
│   ├── hitung-berat-badan/       # Fitur BMI/IMT
│   ├── hitung-ganjil-genap/      # Fitur Ganjil/Genap
│   ├── home/                     # Halaman Utama
│   ├── layout-dasar/             # Layout dasar
│   ├── oprasi-hitung/            # Fitur Kalkulator
│   ├── p6-detail/                # Detail Page
│   ├── p7-storage/               # Penyimpanan Data Lokal
│   ├── services/                 # Service (API calls, storage, dll)
│   ├── app.routes.ts             # Routing config
│   └── app.component.ts          # Root component
├── assets/                       # Assets statis (icon, gambar, dll)
├── environments/                 # Environment config (dev, prod)
└── main.ts                       # Entry point aplikasi
```

### Build untuk Production
```bash
npm run build
ionic capacitor build android --release
ionic capacitor build ios --release
```

### Menjalankan Unit Tests
```bash
npm test
```

### Menjalankan E2E Tests
```bash
npm run e2e
```


---

## 📦 Versi Aplikasi

Versi: 1.0.0

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan praktikum akademik.
