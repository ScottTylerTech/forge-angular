// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { TableComponent as TableComponentCustomElement, defineTableComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-table>` component. */
@Component({
  selector: 'forge-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TableComponent {

	/** The data to be display in the table body. */
	@Input()
	public set data(value: TableComponentCustomElement['data']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.data = value;
		});
	}

	public get data(): TableComponentCustomElement['data'] {
		return this.elementRef.nativeElement.data;
	}

	/** The column configuration options. */
	@Input()
	public set columnConfigurations(value: TableComponentCustomElement['columnConfigurations']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.columnConfigurations = value;
		});
	}

	public get columnConfigurations(): TableComponentCustomElement['columnConfigurations'] {
		return this.elementRef.nativeElement.columnConfigurations;
	}

	/** Controls the visibility of the select column. */
	@Input()
	public set select(value: TableComponentCustomElement['select'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.select = value != null && `${value}` !== 'false';
		});
	}

	public get select(): TableComponentCustomElement['select'] {
		return this.elementRef.nativeElement.select;
	}

	/** Controls the visibility of the select all checkbox (only applied when `select` is `true`). */
	@Input()
	public set multiselect(value: TableComponentCustomElement['multiselect'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.multiselect = value != null && `${value}` !== 'false';
		});
	}

	public get multiselect(): TableComponentCustomElement['multiselect'] {
		return this.elementRef.nativeElement.multiselect;
	}

	/** The row key for matching data to selections. */
	@Input()
	public set selectKey(value: TableComponentCustomElement['selectKey']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectKey = value;
		});
	}

	public get selectKey(): TableComponentCustomElement['selectKey'] {
		return this.elementRef.nativeElement.selectKey;
	}


	@Input()
	public set tooltipSelect(value: TableComponentCustomElement['tooltipSelect']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.tooltipSelect = value;
		});
	}

	public get tooltipSelect(): TableComponentCustomElement['tooltipSelect'] {
		return this.elementRef.nativeElement.tooltipSelect;
	}


	@Input()
	public set tooltipSelectAll(value: TableComponentCustomElement['tooltipSelectAll']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.tooltipSelectAll = value;
		});
	}

	public get tooltipSelectAll(): TableComponentCustomElement['tooltipSelectAll'] {
		return this.elementRef.nativeElement.tooltipSelectAll;
	}

	/** Controls whether the table is dense or not. False by default. */
	@Input()
	public set dense(value: TableComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): TableComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}

	/** Controls whether the table is roomy or not. False by default. */
	@Input()
	public set roomy(value: TableComponentCustomElement['roomy'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.roomy = value != null && `${value}` !== 'false';
		});
	}

	public get roomy(): TableComponentCustomElement['roomy'] {
		return this.elementRef.nativeElement.roomy;
	}

	/** Controls whether the table filters are visible or not. */
	@Input()
	public set filter(value: TableComponentCustomElement['filter'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.filter = value != null && `${value}` !== 'false';
		});
	}

	public get filter(): TableComponentCustomElement['filter'] {
		return this.elementRef.nativeElement.filter;
	}

	/** Controls whether the table applies fixed headers when in scroll containers. */
	@Input()
	public set fixedHeaders(value: TableComponentCustomElement['fixedHeaders'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.fixedHeaders = value != null && `${value}` !== 'false';
		});
	}

	public get fixedHeaders(): TableComponentCustomElement['fixedHeaders'] {
		return this.elementRef.nativeElement.fixedHeaders;
	}

	/** Controls the table layout algorithm. */
	@Input()
	public set layoutType(value: TableComponentCustomElement['layoutType']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.layoutType = value;
		});
	}

	public get layoutType(): TableComponentCustomElement['layoutType'] {
		return this.elementRef.nativeElement.layoutType;
	}

	/** Controls whether the content in each cell wraps or not (true by default). */
	@Input()
	public set wrapContent(value: TableComponentCustomElement['wrapContent'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.wrapContent = value != null && `${value}` !== 'false';
		});
	}

	public get wrapContent(): TableComponentCustomElement['wrapContent'] {
		return this.elementRef.nativeElement.wrapContent;
	}

	/** Controls whether the columns are resizable or not. */
	@Input()
	public set resizable(value: TableComponentCustomElement['resizable'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.resizable = value != null && `${value}` !== 'false';
		});
	}

	public get resizable(): TableComponentCustomElement['resizable'] {
		return this.elementRef.nativeElement.resizable;
	}

	/** Gets/sets the minimum width that a column can be resized to by the user dragging the resize handle. */
	@Input()
	public set minResizeWidth(value: TableComponentCustomElement['minResizeWidth'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.minResizeWidth = +value;
		});
	}

	public get minResizeWidth(): TableComponentCustomElement['minResizeWidth'] {
		return this.elementRef.nativeElement.minResizeWidth;
	}

	/** Gets/sets whether the rows respond to (and emit) row click events. */
	@Input()
	public set allowRowClick(value: TableComponentCustomElement['allowRowClick'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowRowClick = value != null && `${value}` !== 'false';
		});
	}

	public get allowRowClick(): TableComponentCustomElement['allowRowClick'] {
		return this.elementRef.nativeElement.allowRowClick;
	}


	@Input()
	public set multiColumnSort(value: TableComponentCustomElement['multiColumnSort'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.multiColumnSort = value != null && `${value}` !== 'false';
		});
	}

	public get multiColumnSort(): TableComponentCustomElement['multiColumnSort'] {
		return this.elementRef.nativeElement.multiColumnSort;
	}


	@Input()
	public set rowCreated(value: TableComponentCustomElement['rowCreated']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.rowCreated = value;
		});
	}

	public get rowCreated(): TableComponentCustomElement['rowCreated'] {
		return this.elementRef.nativeElement.rowCreated;
	}


	@Input()
	public set cellCreated(value: TableComponentCustomElement['cellCreated']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.cellCreated = value;
		});
	}

	public get cellCreated(): TableComponentCustomElement['cellCreated'] {
		return this.elementRef.nativeElement.cellCreated;
	}


	@Input()
	public set selectAllTemplate(value: TableComponentCustomElement['selectAllTemplate']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectAllTemplate = value;
		});
	}

	public get selectAllTemplate(): TableComponentCustomElement['selectAllTemplate'] {
		return this.elementRef.nativeElement.selectAllTemplate;
	}


	@Input()
	public set selectCheckboxAlignment(value: TableComponentCustomElement['selectCheckboxAlignment']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectCheckboxAlignment = value;
		});
	}

	public get selectCheckboxAlignment(): TableComponentCustomElement['selectCheckboxAlignment'] {
		return this.elementRef.nativeElement.selectCheckboxAlignment;
	}


	public initializedCallback(...args: Parameters<TableComponentCustomElement['initializedCallback']>): ReturnType<TableComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	/** Hides a column from the table. */
	public hideColumn(...args: Parameters<TableComponentCustomElement['hideColumn']>): ReturnType<TableComponentCustomElement['hideColumn']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.hideColumn(...args));
	}

	/** Shows a hidden column in th table. */
	public showColumn(...args: Parameters<TableComponentCustomElement['showColumn']>): ReturnType<TableComponentCustomElement['showColumn']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.showColumn(...args));
	}

	/** Determines if a column at the given index is hidden or not. */
	public isColumnHidden(...args: Parameters<TableComponentCustomElement['isColumnHidden']>): ReturnType<TableComponentCustomElement['isColumnHidden']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.isColumnHidden(...args));
	}

	/** Returns the selected row instances. */
	public getSelectedRows(...args: Parameters<TableComponentCustomElement['getSelectedRows']>): ReturnType<TableComponentCustomElement['getSelectedRows']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.getSelectedRows(...args));
	}

	/** Selects a row in the table. Only applicable if `select` is true. */
	public selectRow(...args: Parameters<TableComponentCustomElement['selectRow']>): ReturnType<TableComponentCustomElement['selectRow']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.selectRow(...args));
	}

	/** Selects one or more rows in the table. Only applicable if `select` is true. */
	public selectRows(...args: Parameters<TableComponentCustomElement['selectRows']>): ReturnType<TableComponentCustomElement['selectRows']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.selectRows(...args));
	}

	/** Deselects a single row in the table. */
	public deselectRow(...args: Parameters<TableComponentCustomElement['deselectRow']>): ReturnType<TableComponentCustomElement['deselectRow']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deselectRow(...args));
	}

	/** Deselects one or more rows in the table. */
	public deselectRows(...args: Parameters<TableComponentCustomElement['deselectRows']>): ReturnType<TableComponentCustomElement['deselectRows']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deselectRows(...args));
	}

	/** Clears all selected table rows. */
	public clearSelections(...args: Parameters<TableComponentCustomElement['clearSelections']>): ReturnType<TableComponentCustomElement['clearSelections']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.clearSelections(...args));
	}

	/** Forces the table to re-render based on its current configuration. */
	public render(...args: Parameters<TableComponentCustomElement['render']>): ReturnType<TableComponentCustomElement['render']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.render(...args));
	}

	/** Expands a collapsed row. */
	public expandRow(...args: Parameters<TableComponentCustomElement['expandRow']>): ReturnType<TableComponentCustomElement['expandRow']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.expandRow(...args));
	}

	/** Collapses an expanded row. */
	public collapseRow(...args: Parameters<TableComponentCustomElement['collapseRow']>): ReturnType<TableComponentCustomElement['collapseRow']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.collapseRow(...args));
	}

	/** Checks if a row is expanded or not. */
	public isRowExpanded(...args: Parameters<TableComponentCustomElement['isRowExpanded']>): ReturnType<TableComponentCustomElement['isRowExpanded']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.isRowExpanded(...args));
	}

	/** Selects a rows by an index or array of indexes. */
	public selectRowsByIndex(...args: Parameters<TableComponentCustomElement['selectRowsByIndex']>): ReturnType<TableComponentCustomElement['selectRowsByIndex']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.selectRowsByIndex(...args));
	}

	/** Deselects a rows by an index or array of indexes. */
	public deselectRowsByIndex(...args: Parameters<TableComponentCustomElement['deselectRowsByIndex']>): ReturnType<TableComponentCustomElement['deselectRowsByIndex']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deselectRowsByIndex(...args));
	}

	/** Checks if a row is selected or not. */
	public isRowSelected(...args: Parameters<TableComponentCustomElement['isRowSelected']>): ReturnType<TableComponentCustomElement['isRowSelected']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.isRowSelected(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<TableComponentCustomElement>,
		protected zone: NgZone
	) {
		defineTableComponent();
		changeDetectorRef.detach();
	}
}
