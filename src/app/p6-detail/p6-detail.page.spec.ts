import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P6DetailPage } from './p6-detail.page';

describe('P6DetailPage', () => {
  let component: P6DetailPage;
  let fixture: ComponentFixture<P6DetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(P6DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
