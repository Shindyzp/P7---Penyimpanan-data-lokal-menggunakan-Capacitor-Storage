import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarMahasiswaPage } from './daftar-mahasiswa.page';

describe('DaftarMahasiswaPage', () => {
  let component: DaftarMahasiswaPage;
  let fixture: ComponentFixture<DaftarMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
