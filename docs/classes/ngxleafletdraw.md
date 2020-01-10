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

*Defined in [NgxLeafletDraw.ts:41](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`map` | L.Map |

**Returns:** *[NgxLeafletDraw](ngxleafletdraw.md)*

## Properties

###  afterCreate

• **afterCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:35](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L35)*

**`title`** After create layer of ngx leaflet draw

**`description`** Pass a function to this variable to be called after the creation of the layer

**`example`** ```typescript
ngxLeafletDraw.afterCreate = () =>{
    console.log("the layer was created :)")
}
```

___

###  beforeCreate

• **beforeCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

*Defined in [NgxLeafletDraw.ts:25](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L25)*

**`title`** Before create of ngx leaflet draw

**`description`** Pass a async function to this variable to be called before the creation
of the layer, it will await until it receives a boolean

**`example`** ```typescript
ngxLeafletDraw.beforeCreate = async () =>{
   const doIWannaAddTheLayer = false //
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

*Defined in [NgxLeafletDraw.ts:38](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L38)*

___

###  drawControl

• **drawControl**: *L.Control.Draw*

*Defined in [NgxLeafletDraw.ts:9](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L9)*

___

###  drawnItems

• **drawnItems**: *any* =  new L.FeatureGroup()

*Defined in [NgxLeafletDraw.ts:36](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L36)*

___

###  editTool

• **editTool**: *L.EditToolbar.Edit*

*Defined in [NgxLeafletDraw.ts:37](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L37)*

___

###  map

• **map**: *L.Map*

*Defined in [NgxLeafletDraw.ts:42](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L42)*

## Methods

###  disableDraw

▸ **disableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:89](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L89)*

Disable the draw toobar

**Returns:** *void*

___

###  enableDraw

▸ **enableDraw**(): *void*

*Defined in [NgxLeafletDraw.ts:82](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L82)*

Enable the draw toobar

**Returns:** *void*

___

###  onNewLayer

▸ **onNewLayer**(): *Observable‹L.Layer›*

*Defined in [NgxLeafletDraw.ts:39](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L39)*

**Returns:** *Observable‹L.Layer›*

___

###  setSettings

▸ **setSettings**(`newSettings`: [DrawSettings](../interfaces/drawsettings.md)): *void*

*Defined in [NgxLeafletDraw.ts:70](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L70)*

Remove/add itens on the toobar

**Parameters:**

Name | Type |
------ | ------ |
`newSettings` | [DrawSettings](../interfaces/drawsettings.md) |

**Returns:** *void*

___

###  startDelete

▸ **startDelete**(): *void*

*Defined in [NgxLeafletDraw.ts:138](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L138)*

Starts the delete mode, used to remove shapes in the map

**Returns:** *void*

___

###  startDraw

▸ **startDraw**(`type`: "circle" | "rectangle" | "polygon" | "marker"): *void*

*Defined in [NgxLeafletDraw.ts:96](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L96)*

Start the draw tool for the shape selected

**Parameters:**

Name | Type |
------ | ------ |
`type` | "circle" &#124; "rectangle" &#124; "polygon" &#124; "marker" |

**Returns:** *void*

___

###  startEdit

▸ **startEdit**(): *any*

*Defined in [NgxLeafletDraw.ts:119](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L119)*

Starts the edit mode, used to edit all shapes in the map

**Returns:** *any*

___

###  stopDelete

▸ **stopDelete**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:145](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L145)*

Stop the edit mode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`revert?` | boolean | if true, undoes all changes of the active removal mode  |

**Returns:** *void*

___

###  stopEdit

▸ **stopEdit**(`revert?`: boolean): *void*

*Defined in [NgxLeafletDraw.ts:126](https://github.com/OpenCIAg/Ngx-Leaflet-Draw-Injector/blob/7a8b118/projects/ngx-leaflet-draw-injector/src/lib/NgxLeafletDraw.ts#L126)*

Stop the edit mode

**Parameters:**

Name | Type |
------ | ------ |
`revert?` | boolean |

**Returns:** *void*
