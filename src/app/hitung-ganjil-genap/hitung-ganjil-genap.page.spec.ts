import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitungGanjilGenapPage } from './hitung-ganjil-genap.page';

describe('HitungGanjilGenapPage', () => {
  let component: HitungGanjilGenapPage;
  let fixture: ComponentFixture<HitungGanjilGenapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitungGanjilGenapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
