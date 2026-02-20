import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'layout-dasar',
    loadComponent: () => import('./layout-dasar/layout-dasar.page').then( m => m.LayoutDasarPage)
  },
  {
    path: 'oprasi-hitung',
    loadComponent: () => import('./oprasi-hitung/oprasi-hitung.page').then( m => m.OprasiHitungPage)
  },
  {
    path: 'hitung-berat-badan',
    loadComponent: () => import('./hitung-berat-badan/hitung-berat-badan.page').then( m => m.HitungBeratBadanPage)
  },
  {
    path: 'hitung-ganjil-genap',
    loadComponent: () => import('./hitung-ganjil-genap/hitung-ganjil-genap.page').then( m => m.HitungGanjilGenapPage)
  },
  {
    path: 'deret-bilangan-prima',
    loadComponent: () => import('./deret-bilangan-prima/deret-bilangan-prima.page').then( m => m.DeretBilanganPrimaPage)
  },
  {
  path: 'p6-detail/:id',
  loadComponent: () =>
    import('./p6-detail/p6-detail.page').then(m => m.P6DetailPage)
},
  {
    path: 'daftar-mahasiswa',
    loadComponent: () => import('./daftar-mahasiswa/daftar-mahasiswa.page').then( m => m.DaftarMahasiswaPage)
  },
  {
    path: 'p7-storage',
    loadComponent: () => import('./p7-storage/p7-storage.page').then( m => m.P7StoragePage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },

];
