import { Injectable, ViewChild, TemplateRef } from '@angular/core';
import * as L from 'leaflet';
import { NgxLeafletDraw } from './NgxLeafletDraw';
/**
 * @title Angular service, made to simplify the draw features to your leaflet map.
 * @author Carlos Benedetti <cbjrcadu@gmail.com>
 */
@Injectable()

export class NgxLeafletDrawInjectorService {

  constructor() { }

  addDrawToMap(map: L.Map) {
    return new NgxLeafletDraw(map);
  }
}



