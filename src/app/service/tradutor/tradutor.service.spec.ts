/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TradutorService } from './tradutor.service';

describe('Service: Tradutor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradutorService]
    });
  });

  it('should ...', inject([TradutorService], (service: TradutorService) => {
    expect(service).toBeTruthy();
  }));
});
