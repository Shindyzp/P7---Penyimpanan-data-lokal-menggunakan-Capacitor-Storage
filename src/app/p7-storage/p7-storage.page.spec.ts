import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P7StoragePage } from './p7-storage.page';

describe('P7StoragePage', () => {
  let component: P7StoragePage;
  let fixture: ComponentFixture<P7StoragePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P7StoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
