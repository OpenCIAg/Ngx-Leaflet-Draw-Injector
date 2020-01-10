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
* [onNewShape](ngxleafletdraw.md#onnewshape)
* [setSettings](ngxleafletdraw.md#setsettings)
* [startDelete](ngxleafletdraw.md#startdelete)
* [startDraw](ngxleafletdraw.md#startdraw)
* [startEdit](ngxleafletdraw.md#startedit)
* [stopDelete](ngxleafletdraw.md#stopdelete)
* [stopEdit](ngxleafletdraw.md#stopedit)

## Constructors

###  constructor

\+ **new NgxLeafletDraw**(`map`: L.Map): *[NgxLeafletDraw](ngxleafletdraw.md)*

Defined in NgxLeafletDraw.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`map` | L.Map |

**Returns:** *[NgxLeafletDraw](ngxleafletdraw.md)*

## Properties

###  afterCreate

• **afterCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

Defined in NgxLeafletDraw.ts:11

___

###  beforeCreate

• **beforeCreate**: *[BefAftCreate](../globals.md#befaftcreate)*

Defined in NgxLeafletDraw.ts:10

___

###  deleteTool

• **deleteTool**: *L.EditToolbar.Delete*

Defined in NgxLeafletDraw.ts:14

___

###  drawControl

• **drawControl**: *L.Control.Draw*

Defined in NgxLeafletDraw.ts:9

___

###  drawnItems

• **drawnItems**: *any* =  new L.FeatureGroup()

Defined in NgxLeafletDraw.ts:12

___

###  editTool

• **editTool**: *L.EditToolbar.Edit*

Defined in NgxLeafletDraw.ts:13

___

###  map

• **map**: *L.Map*

Defined in NgxLeafletDraw.ts:18

## Methods

###  disableDraw

▸ **disableDraw**(): *void*

Defined in NgxLeafletDraw.ts:66

Disable the draw toobar

**Returns:** *void*

___

###  enableDraw

▸ **enableDraw**(): *void*

Defined in NgxLeafletDraw.ts:59

Enable the draw toobar

**Returns:** *void*

___

###  onNewShape

▸ **onNewShape**(): *Observable‹L.Layer›*

Defined in NgxLeafletDraw.ts:15

**Returns:** *Observable‹L.Layer›*

___

###  setSettings

▸ **setSettings**(`newSettings`: [DrawSettings](../interfaces/drawsettings.md)): *void*

Defined in NgxLeafletDraw.ts:47

Remove/add itens on the toobar

**Parameters:**

Name | Type |
------ | ------ |
`newSettings` | [DrawSettings](../interfaces/drawsettings.md) |

**Returns:** *void*

___

###  startDelete

▸ **startDelete**(): *void*

Defined in NgxLeafletDraw.ts:115

Starts the delete mode, used to remove shapes in the map

**Returns:** *void*

___

###  startDraw

▸ **startDraw**(`type`: "circle" | "rectangle" | "polygon" | "marker"): *void*

Defined in NgxLeafletDraw.ts:73

Start the draw tool for the shape selected

**Parameters:**

Name | Type |
------ | ------ |
`type` | "circle" &#124; "rectangle" &#124; "polygon" &#124; "marker" |

**Returns:** *void*

___

###  startEdit

▸ **startEdit**(): *any*

Defined in NgxLeafletDraw.ts:96

Starts the edit mode, used to edit all shapes in the map

**Returns:** *any*

___

###  stopDelete

▸ **stopDelete**(`revert?`: boolean): *void*

Defined in NgxLeafletDraw.ts:122

Stop the edit mode

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`revert?` | boolean | if true, undoes all changes of the active removal mode  |

**Returns:** *void*

___

###  stopEdit

▸ **stopEdit**(`revert?`: boolean): *void*

Defined in NgxLeafletDraw.ts:103

Stop the edit mode

**Parameters:**

Name | Type |
------ | ------ |
`revert?` | boolean |

**Returns:** *void*
