import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeretBilanganPrimaPage } from './deret-bilangan-prima.page';

describe('DeretBilanganPrimaPage', () => {
  let component: DeretBilanganPrimaPage;
  let fixture: ComponentFixture<DeretBilanganPrimaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeretBilanganPrimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
