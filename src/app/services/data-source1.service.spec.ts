import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataSource1Service } from './data-source1.service';

describe('DataSource1Service', () => {
  let service: DataSource1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataSource1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
