import * as L from 'leaflet';
export interface latLong {
    lat: string;
    long: string;
}
export interface GeoJsonFeatureGeomety {
    "type": string;
    "coordinates": number[][][] | any;
}
export interface GeoJsonFeature {
    "type": string;
    "properties": {};
    "geometry": GeoJsonFeatureGeomety;
}
export interface GeoJson {
    "type": string;
    "features": GeoJsonFeature[];
}
export interface BoxCordsSimple {
    topLeft: number[];
    bottonRight: number[];
}
export type BefAftCreate = () => Promise<boolean>;

export interface DrawSettings {
  position?: L.ControlPosition;
  draw: L.Control.DrawOptions;
  edit?: {
    edit?: false;
    remove?: false;
  };
}
