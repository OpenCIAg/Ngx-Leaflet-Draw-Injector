<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [leaflet-draw-injector](#leaflet-draw-injector)
  - [Index](#index)
    - [Classes](#classes)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
  - [Type aliases](#type-aliases-1)
    - [BefAftCreate](#befaftcreate)
- [Classes](#classes-1)
  - [Class: NgxLeafletDraw](#class-ngxleafletdraw)
    - [Hierarchy](#hierarchy)
    - [Index](#index-1)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: NgxLeafletDrawInjectorService](#class-ngxleafletdrawinjectorservice)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-2)
    - [Constructors](#constructors-1)
    - [Methods](#methods-1)
  - [Class: NgxLeafletDrawSettings](#class-ngxleafletdrawsettings)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-3)
    - [Methods](#methods-2)
- [Interfaces](#interfaces-1)
  - [Interface: BoxCordsSimple](#interface-boxcordssimple)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-4)
    - [Properties](#properties-1)
  - [Interface: DrawSettings](#interface-drawsettings)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-5)
    - [Properties](#properties-2)
  - [Interface: GeoJson](#interface-geojson)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-6)
    - [Properties](#properties-3)
  - [Interface: GeoJsonFeature](#interface-geojsonfeature)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-7)
    - [Properties](#properties-4)
  - [Interface: GeoJsonFeatureGeomety](#interface-geojsonfeaturegeomety)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-8)
    - [Properties](#properties-5)
  - [Interface: latLong](#interface-latlong)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-9)
    - [Properties](#properties-6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="globalsmd"></a>

[leaflet-draw-injector](README.md) › [Globals](#globalsmd)

# leaflet-draw-injector

## Index

### Classes

* [NgxLeafletDraw](#classesngxleafletdrawmd)
* [NgxLeafletDrawInjectorService](#classesngxleafletdrawinjectorservicemd)
* [NgxLeafletDrawSettings](#classesngxleafletdrawsettingsmd)

### Interfaces

* [BoxCordsSimple](#interfacesboxcordssimplemd)
* [DrawSettings](#interfacesdrawsettingsmd)
* [GeoJson](#interfacesgeojsonmd)
* [GeoJsonFeature](#interfacesgeojsonfeaturemd)
* [GeoJsonFeatureGeomety](#interfacesgeojsonfeaturegeometymd)
* [latLong](#interfaceslatlongmd)

### Type aliases

* [BefAftCreate](#befaftcreate)

## Type aliases

###  BefAftCreate

Ƭ **BefAftCreate**: *function*

*Defined in [interfaces.d.ts:23](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L23)*

#### Type declaration:

▸ (): *Promise‹boolean›*

# Classes


<a name="classesngxleafletdrawmd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [NgxLeafletDraw](#classesngxleafletdrawmd)

## Class: NgxLeafletDraw

### Hierarchy

* **NgxLeafletDraw**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [afterCreate](#aftercreate)
* [beforeCreate](#beforecreate)
* [deleteTool](#deletetool)
* [drawControl](#drawcontrol)
* [drawnItems](#drawnitems)
* [editTool](#edittool)
* [map](#map)

#### Methods

* [disableDraw](#disabledraw)
* [enableDraw](#enabledraw)
* [onNewLayer](#onnewlayer)
* [setSettings](#setsettings)
* [startDelete](#startdelete)
* [startDraw](#startdraw)
* [startEdit](#startedit)
* [stopDelete](#stopdelete)
* [stopEdit](#stopedit)

### Constructors

####  constructor

\+ **new NgxLeafletDraw**(`map`: L.Map): *[NgxLeafletDraw](#classesngxleafletdrawmd)*

*Defined in [NgxLeafletDraw.ts:39](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | L.Map |

**Returns:** *[NgxLeafletDraw](#classesngxleafletdrawmd)*

### Properties

####  afterCreate

• **afterCreate**: *[BefAftCreate](#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:33](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L33)*

 Pass a function to this variable to be called after the creation of the layer
 ```typescript
ngxLeafletDraw.afterCreate = () =>{
    console.log("the layer was created :)")
}
```

___

####  beforeCreate

• **beforeCreate**: *[BefAftCreate](#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:24](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L24)*

 Pass a async function to this variable to be called before the creation
of the layer, it will await until it receives a boolean
```typescript
const doIWannaAddTheLayer = false
ngxLeafletDraw.beforeCreate = async () =>{
   if(doIWannaAddTheLayer){
       return true // the layer will be added to the map
   } else{
       return false //the layer will NOT be added to the map
   }
 }
```

___

####  deleteTool

• **deleteTool**: *L.EditToolbar.Delete*

*Defined in [NgxLeafletDraw.ts:36](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L36)*

___

####  drawControl

• **drawControl**: *L.Control.Draw*

*Defined in [NgxLeafletDraw.ts:9](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L9)*

___

####  drawnItems

• **drawnItems**: *any* =  new L.FeatureGroup()

*Defined in [NgxLeafletDraw.ts:34](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L34)*

___

####  editTool

• **editTool**: *L.EditToolbar.Edit*

*Defined in [NgxLeafletDraw.ts:35](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L35)*

___

####  map

• **map**: *L.Map*

*Defined in [NgxLeafletDraw.ts:40](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L40)*

### Methods

####  disableDraw

▸ **disableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:87](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L87)*

Disable the draw toobar

**Returns:** *void*

___

####  enableDraw

▸ **enableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:80](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L80)*

Enable the draw toobar

**Returns:** *void*

___

####  onNewLayer

▸ **onNewLayer**(): *Observable‹L.Layer›*

*Defined in [NgxLeafletDraw.ts:37](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L37)*

**Returns:** *Observable‹L.Layer›*

___

####  setSettings

▸ **setSettings**(`newSettings`: [DrawSettings](#interfacesdrawsettingsmd)): *void*

*Defined in [NgxLeafletDraw.ts:68](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L68)*

Remove/add itens on the toobar

**Parameters:**

Name | Type |
------ | ------ |
`newSettings` | [DrawSettings](#interfacesdrawsettingsmd) |

**Returns:** *void*

___

####  startDelete

▸ **startDelete**(): *void*

*Defined in [NgxLeafletDraw.ts:136](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L136)*

Starts the delete mode, used to remove shapes in the map

**Returns:** *void*

___

####  startDraw

▸ **startDraw**(`type`: "circle" | "rectangle" | "polygon" | "marker"): *void*

*Defined in [NgxLeafletDraw.ts:94](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L94)*

Start the draw tool for the shape selected

**Parameters:**

Name | Type |
------ | ------ |
`type` | "circle" &#124; "rectangle" &#124; "polygon" &#124; "marker" |

**Returns:** *void*

___

####  startEdit

▸ **startEdit**(): *any*

*Defined in [NgxLeafletDraw.ts:117](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L117)*

Starts the edit mode, used to edit all shapes in the map

**Returns:** *any*

___

####  stopDelete

▸ **stopDelete**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:143](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L143)*

Stop the edit mode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`revert?` | boolean | if true, undoes all changes of the active removal mode  |

**Returns:** *void*

___

####  stopEdit

▸ **stopEdit**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:124](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L124)*

Stop the edit mode

**Parameters:**

Name | Type |
------ | ------ |
`revert?` | boolean |

**Returns:** *void*


<a name="classesngxleafletdrawinjectorservicemd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [NgxLeafletDrawInjectorService](#classesngxleafletdrawinjectorservicemd)

## Class: NgxLeafletDrawInjectorService

**`title`** Angular service, made to simplify the draw features to your leaflet map.

**`author`** Carlos Benedetti <cbjrcadu@gmail.com>

### Hierarchy

* **NgxLeafletDrawInjectorService**

### Index

#### Constructors

* [constructor](#constructor)

#### Methods

* [addDrawToMap](#adddrawtomap)

### Constructors

####  constructor

\+ **new NgxLeafletDrawInjectorService**(): *[NgxLeafletDrawInjectorService](#classesngxleafletdrawinjectorservicemd)*

*Defined in [ngx-leaflet-draw-injector.service.ts:10](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/ngx-leaflet-draw-injector.service.ts#L10)*

**Returns:** *[NgxLeafletDrawInjectorService](#classesngxleafletdrawinjectorservicemd)*

### Methods

####  addDrawToMap

▸ **addDrawToMap**(`map`: L.Map): *[NgxLeafletDraw](#classesngxleafletdrawmd)‹›*

*Defined in [ngx-leaflet-draw-injector.service.ts:14](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/ngx-leaflet-draw-injector.service.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | L.Map |

**Returns:** *[NgxLeafletDraw](#classesngxleafletdrawmd)‹›*


<a name="classesngxleafletdrawsettingsmd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [NgxLeafletDrawSettings](#classesngxleafletdrawsettingsmd)

## Class: NgxLeafletDrawSettings

### Hierarchy

* **NgxLeafletDrawSettings**

### Index

#### Methods

* [DRAWOPTIONS](#static-drawoptions)

### Methods

#### `Static` DRAWOPTIONS

▸ **DRAWOPTIONS**(`drawFeatureGroup`: L.FeatureGroup): *L.Control.DrawConstructorOptions*

*Defined in [NgxLeafletDrawSettings.ts:3](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDrawSettings.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`drawFeatureGroup` | L.FeatureGroup |

**Returns:** *L.Control.DrawConstructorOptions*

# Interfaces


<a name="interfacesboxcordssimplemd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [BoxCordsSimple](#interfacesboxcordssimplemd)

## Interface: BoxCordsSimple

### Hierarchy

* **BoxCordsSimple**

### Index

#### Properties

* [bottonRight](#bottonright)
* [topLeft](#topleft)

### Properties

####  bottonRight

• **bottonRight**: *number[]*

*Defined in [interfaces.d.ts:21](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L21)*

___

####  topLeft

• **topLeft**: *number[]*

*Defined in [interfaces.d.ts:20](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L20)*


<a name="interfacesdrawsettingsmd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [DrawSettings](#interfacesdrawsettingsmd)

## Interface: DrawSettings

### Hierarchy

* **DrawSettings**

### Index

#### Properties

* [draw](#draw)
* [edit](#optional-edit)
* [position](#optional-position)

### Properties

####  draw

• **draw**: *L.Control.DrawOptions*

*Defined in [interfaces.d.ts:27](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L27)*

___

#### `Optional` edit

• **edit**? : *object*

*Defined in [interfaces.d.ts:28](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L28)*

##### Type declaration:

* **edit**? : *false*

* **remove**? : *false*

___

#### `Optional` position

• **position**? : *L.ControlPosition*

*Defined in [interfaces.d.ts:26](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L26)*


<a name="interfacesgeojsonmd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [GeoJson](#interfacesgeojsonmd)

## Interface: GeoJson

### Hierarchy

* **GeoJson**

### Index

#### Properties

* [features](#features)
* [type](#type)

### Properties

####  features

• **features**: *[GeoJsonFeature](#interfacesgeojsonfeaturemd)[]*

*Defined in [interfaces.d.ts:17](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L17)*

___

####  type

• **type**: *string*

*Defined in [interfaces.d.ts:16](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L16)*


<a name="interfacesgeojsonfeaturemd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [GeoJsonFeature](#interfacesgeojsonfeaturemd)

## Interface: GeoJsonFeature

### Hierarchy

* **GeoJsonFeature**

### Index

#### Properties

* [geometry](#geometry)
* [properties](#properties)
* [type](#type)

### Properties

####  geometry

• **geometry**: *[GeoJsonFeatureGeomety](#interfacesgeojsonfeaturegeometymd)*

*Defined in [interfaces.d.ts:13](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L13)*

___

####  properties

• **properties**: *__type*

*Defined in [interfaces.d.ts:12](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L12)*

___

####  type

• **type**: *string*

*Defined in [interfaces.d.ts:11](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L11)*


<a name="interfacesgeojsonfeaturegeometymd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [GeoJsonFeatureGeomety](#interfacesgeojsonfeaturegeometymd)

## Interface: GeoJsonFeatureGeomety

### Hierarchy

* **GeoJsonFeatureGeomety**

### Index

#### Properties

* [coordinates](#coordinates)
* [type](#type)

### Properties

####  coordinates

• **coordinates**: *number[][][] | any*

*Defined in [interfaces.d.ts:8](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L8)*

___

####  type

• **type**: *string*

*Defined in [interfaces.d.ts:7](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L7)*


<a name="interfaceslatlongmd"></a>

[leaflet-draw-injector](../README.md) › [Globals](#globalsmd) › [latLong](#interfaceslatlongmd)

## Interface: latLong

### Hierarchy

* **latLong**

### Index

#### Properties

* [lat](#lat)
* [long](#long)

### Properties

####  lat

• **lat**: *string*

*Defined in [interfaces.d.ts:3](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L3)*

___

####  long

• **long**: *string*

*Defined in [interfaces.d.ts:4](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/ca6b1fb/projects/ngx-leaflet-draw-injector/src/lib/interfaces.d.ts#L4)*
