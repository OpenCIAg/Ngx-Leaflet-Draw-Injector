import { TestBed } from '@angular/core/testing';

import { NgxLeafletDrawInjectorService } from './ngx-leaflet-draw-injector.service';

describe('NgxLeafletDrawInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLeafletDrawInjectorService = TestBed.get(NgxLeafletDrawInjectorService);
    expect(service).toBeTruthy();
  });
});
