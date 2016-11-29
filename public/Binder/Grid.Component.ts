import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'grid-ui',
    templateUrl: '../UI/UIGrid.html'
})
export class GridComponent {
    gridColumns: Array<string> = new Array<string>();
    gridData: Array<Object> = new Array<Object>();

    @Input("grid-entity")
    gridEntity: string = "";

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
        if (_gridData.length > 0 && this.gridColumns.length == 0) {
            Object.keys(_gridData[0]).forEach(element => {
                this.gridColumns.push(element);
            });
        }
        this.gridData = _gridData;
    }

    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();

    Select(_selected: Object) {
        this.selected.emit(_selected);
    }

    @Output("grid-delete")
    deleteRow: EventEmitter<number> = new EventEmitter<number>();

    Delete(index: number) {
        this.deleteRow.emit(index);
    }
}