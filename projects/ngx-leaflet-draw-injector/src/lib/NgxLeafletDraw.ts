import { Subject, Observable } from 'rxjs';
import { NgxLeafletDrawSettings } from "./NgxLeafletDrawSettings";
import * as L from 'leaflet';
import { BefAftCreate, DrawSettings } from './interfaces';
export class NgxLeafletDraw {
    private _newShape: Subject<L.Layer> = new Subject();
    protected settings: L.Control.DrawConstructorOptions;
    protected IsEnable: boolean;
    public drawControl: L.Control.Draw;
    /**
     *  Pass a async function to this variable to be called before the creation 
     * of the layer, it will await until it receives a boolean
     * ```typescript
     * const doIWannaAddTheLayer = false
     * ngxLeafletDraw.beforeCreate = async () =>{
     *    if(doIWannaAddTheLayer){
     *        return true // the layer will be added to the map
     *    } else{
     *        return false //the layer will NOT be added to the map
     *    }
     *  }
     * ```
     */
    public beforeCreate: BefAftCreate;
    /**
     *  Pass a function to this variable to be called after the creation of the layer
     *  ```typescript
     * ngxLeafletDraw.afterCreate = () =>{
     *     console.log("the layer was created :)")
     * }
     * ```
     */
    public afterCreate: BefAftCreate;
    public drawnItems = new L.FeatureGroup();
    public editTool: L.EditToolbar.Edit;
    public deleteTool: L.EditToolbar.Delete;
    public onNewLayer(): Observable<L.Layer> {
        return this._newShape.asObservable();
    }
    constructor(public map: L.Map) {
        this.onNewLayer().subscribe(l => {
            this.drawnItems.addLayer(l);
            if (this.afterCreate) {
                this.afterCreate();
            }
        });
        this.map.addLayer(this.drawnItems);
        this.drawControl = new L.Control.Draw(NgxLeafletDrawSettings.DRAWOPTIONS(this.drawnItems));
        this.map.on('draw:created', async (e) => {
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
        const againgWhitThisTypeBug: any = this.map;
        const tbOptions: any = { featureGroup: this.drawnItems };
        this.editTool = new L.EditToolbar.Edit(againgWhitThisTypeBug, tbOptions);
        this.deleteTool = new L.EditToolbar.Delete(againgWhitThisTypeBug, tbOptions);
    }
    /**
     * Remove/add itens on the toobar
     */
    setSettings(newSettings: DrawSettings) {
        if (!newSettings.edit) {
            newSettings['edit'] = {};
        }
        newSettings.edit['featureGroup'] = this.drawnItems;
        this.disableDraw();
        this.drawControl = new L.Control.Draw(newSettings);
        this.enableDraw();
    }
    /**
     * Enable the draw toobar
     */
    enableDraw() {
        this.IsEnable = true;
        this.map.addControl(this.drawControl);
    }
    /**
     * Disable the draw toobar
     */
    disableDraw() {
        this.IsEnable = false;
        this.map.removeControl(this.drawControl);
    }
    /**
     * Start the draw tool for the shape selected
     */
    startDraw(type: 'circle' | 'rectangle' | 'polygon' | 'marker') {
        let layer: any;
        switch (type) {
            case 'circle':
                layer = new L.Draw.Circle(this.map, this.drawControl.options.circle).enable();
                break;
            case 'rectangle':
                layer = new L.Draw.Rectangle(this.map, this.drawControl.options.retangle).enable();
                break;
            case 'polygon':
                layer = new L.Draw.Polygon(this.map, this.drawControl.options.polygon).enable();
                break;
            case 'marker':
                layer = new L.Draw.Marker(this.map, this.drawControl.options.marker).enable();
                break;
            default:
                console.error(`type ${type} unknown`);
                break;
        }
    }
    /**
     * Starts the edit mode, used to edit all shapes in the map
     */
    startEdit() {
        return this.editTool.enable();
    }
    /**
     * Stop the edit mode
     * @param [revert] if true, undoes all changes of the active edition mode
     */
    stopEdit(revert?: boolean) {
        if (revert) {
            this.editTool.revertLayers();
        }
        else {
            this.editTool.save();
        }
        this.editTool.disable();
    }
    /**
     * Starts the delete mode, used to remove shapes in the map
     */
    startDelete() {
        this.deleteTool.enable();
    }
    /**
     * Stop the edit mode
     * @param revert if true, undoes all changes of the active removal mode
     */
    stopDelete(revert?: boolean) {
        if (revert) {
            this.deleteTool.revertLayers();
        } else {
            this.deleteTool.save();
        }
        this.deleteTool.disable();
    }
}
