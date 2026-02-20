import { TestBed } from '@angular/core/testing';

import { DataMahasiswaP7 } from './data-mahasiswa-p7.service';

describe('DataMahasiswaP7', () => {
  let service: DataMahasiswaP7;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMahasiswaP7);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
