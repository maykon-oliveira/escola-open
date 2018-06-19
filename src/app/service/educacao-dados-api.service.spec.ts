import { TestBed, inject } from '@angular/core/testing';

import { EducacaoDadosAPIService } from './educacao-dados-api.service';

describe('EducacaoDadosAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducacaoDadosAPIService]
    });
  });

  it('should be created', inject([EducacaoDadosAPIService], (service: EducacaoDadosAPIService) => {
    expect(service).toBeTruthy();
  }));
});
