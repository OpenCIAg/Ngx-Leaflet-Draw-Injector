import { NgModule } from '@angular/core';
import { NgxLeafletDrawInjectorService } from './ngx-leaflet-draw-injector.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { NgxLeafletDrawInjectorComponent } from './ngx-leaflet-draw-injector.component';

@NgModule({
  declarations: [NgxLeafletDrawInjectorComponent],
  imports: [
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot()
  ],
  providers: [NgxLeafletDrawInjectorService],
  exports: [NgxLeafletDrawInjectorComponent]
})
export class NgxLeafletDrawInjectorModule {

}
