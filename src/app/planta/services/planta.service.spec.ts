import { TestBed } from '@angular/core/testing';

import { PlantaService } from './planta.service';
import { HttpClientModule } from '@angular/common/http';
describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
