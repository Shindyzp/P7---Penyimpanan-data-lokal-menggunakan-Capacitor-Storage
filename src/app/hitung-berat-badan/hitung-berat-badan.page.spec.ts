import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitungBeratBadanPage } from './hitung-berat-badan.page';

describe('HitungBeratBadanPage', () => {
  let component: HitungBeratBadanPage;
  let fixture: ComponentFixture<HitungBeratBadanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitungBeratBadanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
