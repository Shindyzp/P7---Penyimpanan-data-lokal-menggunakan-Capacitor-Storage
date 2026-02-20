import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutDasarPage } from './layout-dasar.page';

describe('LayoutDasarPage', () => {
  let component: LayoutDasarPage;
  let fixture: ComponentFixture<LayoutDasarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDasarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
