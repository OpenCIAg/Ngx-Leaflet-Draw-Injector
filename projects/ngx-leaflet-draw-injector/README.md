# [WIP] NgxLeafletDrawInjector
A angular Lib 

Objective: a simplyfied way to add draw features to your leaflet map.
## [API](globals.md)

## Table of contents
1. [Installation](#installation)
1. [Usage](#usage)

## Installation
Intall the NgxLeafletDrawInjector via NPM

### NPM
```shell
    npm i @ciag/ngx-leaflet-draw-injector
```



## Usage
``` app.module.ts ```
```typescript

import {NgxLeafletDrawInjectorModule} from '@ciag/ngx-leaflet-draw-injector';



@NgModule({
  //...
  imports: [
    //...
    NgxLeafletDrawInjectorModule
  ],
  //...
})
export class AppModule { }
```


``` my.component.ts ```
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    
    constructor(private drawInjectorService: NgxLeafletDrawInjectorService) { }

    ngOnInit() { 
        // normal leaflet setup
        this.map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

        // Adding drawbar
        this.drawControl = this.drawInjectorService.addDrawToMap(this.map);

    }
}
```

### To intercept the attempt to create a new Layer and even cancel the creation, just add a promise
### this goes to to the after create as well

``` my.component.ts ```
```typescript

import { Component, OnInit } from '@angular/core';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    // conformation modal
    @ViewChild('newShapeModal') newShapeModal: ElementRef;

    constructor(private drawInjectorService: NgxLeafletDrawInjectorService) { }

    ngOnInit() {
        //...
        this.drawControl = this.drawInjectorService.addDrawToMap(this.map);
        this.drawControl.beforeCreate = () => {
            return new Promise(async (r) => {
                const result = await this.open(this.newShapeModal)
                r(result)
            });
        };
        this.drawControl.afterCreate = () => {
            return new Promise(async (r) => {
                console.log("new layer :)")
                r()
            });
        };
    }
    open(content): Promise<boolean> {
        return new Promise(r => {
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {
                r(true);
            }, () => {
                r(false);
            });
        });
    }
}



```
