import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OprasiHitungPage } from './oprasi-hitung.page';

describe('OprasiHitungPage', () => {
  let component: OprasiHitungPage;
  let fixture: ComponentFixture<OprasiHitungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OprasiHitungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
