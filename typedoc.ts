module.exports = {
  src: [
    'projects/ngx-leaflet-draw-injector/src/lib/ngx-leaflet-draw-injector.service.ts',
    'projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts',
    'projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDrawSettings.ts',
    'projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts'
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './docs',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'leaflet-draw-injector',
  ignoreCompilerErrors: true,
  plugin: 'none',
  listInvalidSymbolLinks: true,
};