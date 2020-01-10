[leaflet-draw-injector](../README.md) › [Globals](../globals.md) › [NgxLeafletDraw](ngxleafletdraw.md)

# Class: NgxLeafletDraw

## Hierarchy

* **NgxLeafletDraw**

## Index

### Constructors

* [constructor](ngxleafletdraw.md#constructor)

### Properties

* [afterCreate](ngxleafletdraw.md#aftercreate)
* [beforeCreate](ngxleafletdraw.md#beforecreate)
* [deleteTool](ngxleafletdraw.md#deletetool)
* [drawControl](ngxleafletdraw.md#drawcontrol)
* [drawnItems](ngxleafletdraw.md#drawnitems)
* [editTool](ngxleafletdraw.md#edittool)
* [map](ngxleafletdraw.md#map)

### Methods

* [disableDraw](ngxleafletdraw.md#disabledraw)
* [enableDraw](ngxleafletdraw.md#enabledraw)
* [onNewLayer](ngxleafletdraw.md#onnewlayer)
* [setSettings](ngxleafletdraw.md#setsettings)
* [startDelete](ngxleafletdraw.md#startdelete)
* [startDraw](ngxleafletdraw.md#startdraw)
* [startEdit](ngxleafletdraw.md#startedit)
* [stopDelete](ngxleafletdraw.md#stopdelete)
* [stopEdit](ngxleafletdraw.md#stopedit)

## Constructors

###  constructor

\+ **new NgxLeafletDraw**(`map`: L.Map): *[NgxLeafletDraw](ngxleafletdraw.md)*

*Defined in [NgxLeafletDraw.ts:39](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | L.Map |

**Returns:** *[NgxLeafletDraw](ngxleafletdraw.md)*

## Properties

###  afterCreate

• **afterCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:33](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L33)*

 Pass a function to this variable to be called after the creation of the layer
 ```typescript
ngxLeafletDraw.afterCreate = () =>{
    console.log("the layer was created :)")
}
```

___

###  beforeCreate

• **beforeCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:24](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L24)*

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

###  deleteTool

• **deleteTool**: *L.EditToolbar.Delete*

*Defined in [NgxLeafletDraw.ts:36](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L36)*

___

###  drawControl

• **drawControl**: *L.Control.Draw*

*Defined in [NgxLeafletDraw.ts:9](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L9)*

___

###  drawnItems

• **drawnItems**: *any* =  new L.FeatureGroup()

*Defined in [NgxLeafletDraw.ts:34](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L34)*

___

###  editTool

• **editTool**: *L.EditToolbar.Edit*

*Defined in [NgxLeafletDraw.ts:35](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L35)*

___

###  map

• **map**: *L.Map*

*Defined in [NgxLeafletDraw.ts:40](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L40)*

## Methods

###  disableDraw

▸ **disableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:87](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L87)*

Disable the draw toobar

**Returns:** *void*

___

###  enableDraw

▸ **enableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:80](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L80)*

Enable the draw toobar

**Returns:** *void*

___

###  onNewLayer

▸ **onNewLayer**(): *Observable‹L.Layer›*

*Defined in [NgxLeafletDraw.ts:37](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L37)*

**Returns:** *Observable‹L.Layer›*

___

###  setSettings

▸ **setSettings**(`newSettings`: [DrawSettings](../interfaces/drawsettings.md)): *void*

*Defined in [NgxLeafletDraw.ts:68](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L68)*

Remove/add itens on the toobar

**Parameters:**

Name | Type |
------ | ------ |
`newSettings` | [DrawSettings](../interfaces/drawsettings.md) |

**Returns:** *void*

___

###  startDelete

▸ **startDelete**(): *void*

*Defined in [NgxLeafletDraw.ts:136](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L136)*

Starts the delete mode, used to remove shapes in the map

**Returns:** *void*

___

###  startDraw

▸ **startDraw**(`type`: "circle" | "rectangle" | "polygon" | "marker"): *void*

*Defined in [NgxLeafletDraw.ts:94](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L94)*

Start the draw tool for the shape selected

**Parameters:**

Name | Type |
------ | ------ |
`type` | "circle" &#124; "rectangle" &#124; "polygon" &#124; "marker" |

**Returns:** *void*

___

###  startEdit

▸ **startEdit**(): *any*

*Defined in [NgxLeafletDraw.ts:117](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L117)*

Starts the edit mode, used to edit all shapes in the map

**Returns:** *any*

___

###  stopDelete

▸ **stopDelete**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:143](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L143)*

Stop the edit mode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`revert?` | boolean | if true, undoes all changes of the active removal mode  |

**Returns:** *void*

___

###  stopEdit

▸ **stopEdit**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:124](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/fcb54a5/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L124)*

Stop the edit mode

**Parameters:**

Name | Type |
------ | ------ |
`revert?` | boolean |

**Returns:** *void*
