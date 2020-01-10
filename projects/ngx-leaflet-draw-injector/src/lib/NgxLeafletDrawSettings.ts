import * as L from 'leaflet';
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
