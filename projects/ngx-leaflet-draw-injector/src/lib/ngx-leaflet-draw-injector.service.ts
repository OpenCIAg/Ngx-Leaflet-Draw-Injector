import { Injectable, ViewChild, TemplateRef } from '@angular/core';
import * as L from 'leaflet';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class NgxLeafletDrawInjectorService {

  constructor() { }

  addDrawToMap(map: L.Map) {
    return new NgxLeafletDraw(map, null);
  }

}
type BefAftCreate = () => Promise<boolean>;

export class NgxLeafletDraw {
  drawControl: L.Control.Draw;
  _newShape: Subject<L.Layer> = new Subject();
  IsEnable: boolean;
  beforeCreate: BefAftCreate;
  afterCreate: BefAftCreate;
  drawnItems = new L.FeatureGroup();
  settings: L.Control.DrawConstructorOptions;

  onNewShape(): Observable<L.Layer> {
    return this._newShape.asObservable();
  }
  constructor(public map: L.Map, private modalService: any) {

    this.onNewShape().subscribe(l => {
      this.drawnItems.addLayer(l);
      if (this.afterCreate) {
        this.afterCreate();
      }
    });

    map.addLayer(this.drawnItems);

    this.drawControl = new L.Control.Draw(NgxLeafletDrawSettings.DRAWOPTIONS(this.drawnItems));

    this.map.on('draw:created', async e => {
      if (this.beforeCreate) {
        const didPass = await this.beforeCreate();
        if (didPass) {
          this._newShape.next(e.layer);
        }
      } else {
        this._newShape.next(e.layer);
      }
    });
    this.enableDraw();
  }

  /**
   * Remove/add itens on the toobar
   */
  setSettings(newSettings: { position?: L.ControlPosition, draw: L.Control.DrawOptions, edit?: { edit?: false, remove?: false } }) {
    if (!newSettings.edit) {
      newSettings['edit'] = {};
    }
    newSettings.edit['featureGroup'] = this.drawnItems;
    this.disableDraw();
    //@ts-ignore
    this.drawControl = new L.Control.Draw(newSettings);
    this.enableDraw();
  }
  /**
   * Disable the draw toobar
   */
  disableDraw() {
    this.IsEnable = false;
    this.map.removeControl(this.drawControl);
  }
  startDraw(type: 'circle' | 'rectangle' | 'polygon' | 'marker') {
    let layer: any
    switch (type) {
      case 'circle':
        //@ts-ignore
        layer = new L.Draw.Circle(this.map, this.drawControl.options.circle).enable();
        break;
      case 'rectangle':
        //@ts-ignore
        layer = new L.Draw.Rectangle(this.map, this.drawControl.options.retangle).enable();
        break;
      case 'polygon':
        //@ts-ignore
        layer = new L.Draw.Polygon(this.map, this.drawControl.options.polygon).enable();
        break;
      case 'marker':
        //@ts-ignore
        layer = new L.Draw.Marker(this.map, this.drawControl.options.marker).enable();
        break;
      default:
        console.error(`type ${type} unknown`)
        break;
    }
  }
  startEdit() {
    //@ts-ignore
    return new L.EditToolbar.Edit(this.map, { featureGroup: this.drawControl.options.featureGroup, selectedPathOptions: this.drawControl.options.edit.selectedPathOptions })
  }
  startDelete() {
    //@ts-ignore
    return new L.EditToolbar.Delete(this.map, { featureGroup: this.drawControl.options.featureGroup })
  }
  /**
   * Enable the draw toobar
   */
  enableDraw() {
    this.IsEnable = true;
    this.map.addControl(this.drawControl);
  }
}

export class NgxLeafletDrawSettings {
  static DRAWOPTIONS(drawFeatureGroup: L.FeatureGroup): L.Control.DrawConstructorOptions {
    return {
      draw: {
        circle: false,
        marker: false,
        polyline: false,
        circlemarker: false,
        rectangle: false
      }, edit: {
        edit: false,
        remove: false,
        featureGroup: drawFeatureGroup
      }
    };
  }
}

