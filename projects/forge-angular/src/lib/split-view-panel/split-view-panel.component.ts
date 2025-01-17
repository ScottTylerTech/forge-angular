// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { SplitViewPanelComponent as SplitViewPanelComponentCustomElement, defineSplitViewPanelComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-split-view-panel>` element. */
@Component({
  selector: 'forge-split-view-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SplitViewPanelComponent {

	/** Controls which side of the panel the resize handle appears on. */
	@Input()
	public set resizable(value: SplitViewPanelComponentCustomElement['resizable']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.resizable = value;
		});
	}

	public get resizable(): SplitViewPanelComponentCustomElement['resizable'] {
		return this.elementRef.nativeElement.resizable;
	}

	/** The initial size along the axis of orientation. */
	@Input()
	public set size(value: SplitViewPanelComponentCustomElement['size']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.size = value;
		});
	}

	public get size(): SplitViewPanelComponentCustomElement['size'] {
		return this.elementRef.nativeElement.size;
	}

	/** The smallest size the panel can take along its axis of orientation. */
	@Input()
	public set min(value: SplitViewPanelComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.min = value;
		});
	}

	public get min(): SplitViewPanelComponentCustomElement['min'] {
		return this.elementRef.nativeElement.min;
	}

	/** The largest size the panel can take along its axis of orientation. */
	@Input()
	public set max(value: SplitViewPanelComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.max = value;
		});
	}

	public get max(): SplitViewPanelComponentCustomElement['max'] {
		return this.elementRef.nativeElement.max;
	}

	/** The ARIA label given to the resize handle. */
	@Input()
	public set accessibleLabel(value: SplitViewPanelComponentCustomElement['accessibleLabel']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.accessibleLabel = value;
		});
	}

	public get accessibleLabel(): SplitViewPanelComponentCustomElement['accessibleLabel'] {
		return this.elementRef.nativeElement.accessibleLabel;
	}

	/** Controls the open state of the panel. */
	@Input()
	public set open(value: SplitViewPanelComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): SplitViewPanelComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}

	/** Whether resize interactions are disabled or enabled. */
	@Input()
	public set disabled(value: SplitViewPanelComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value;
		});
	}

	public get disabled(): SplitViewPanelComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}

	/** Whether the panel can be closed via keyboard interaction. */
	@Input()
	public set allowClose(value: SplitViewPanelComponentCustomElement['allowClose']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowClose = value;
		});
	}

	public get allowClose(): SplitViewPanelComponentCustomElement['allowClose'] {
		return this.elementRef.nativeElement.allowClose;
	}

	/** Whether the panel automatically closes when it reaches a size of 0. */
	@Input()
	public set autoClose(value: SplitViewPanelComponentCustomElement['autoClose']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.autoClose = value;
		});
	}

	public get autoClose(): SplitViewPanelComponentCustomElement['autoClose'] {
		return this.elementRef.nativeElement.autoClose;
	}

	/** The size at which the panel auto closes. */
	@Input()
	public set autoCloseThreshold(value: SplitViewPanelComponentCustomElement['autoCloseThreshold']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.autoCloseThreshold = value;
		});
	}

	public get autoCloseThreshold(): SplitViewPanelComponentCustomElement['autoCloseThreshold'] {
		return this.elementRef.nativeElement.autoCloseThreshold;
	}

	/** Gets the size of content along the axis of orientation. */
	public getContentSize(...args: Parameters<SplitViewPanelComponentCustomElement['getContentSize']>): ReturnType<SplitViewPanelComponentCustomElement['getContentSize']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.getContentSize(...args));
	}

	/**
	 * Gets the amount that the content can shrink along the axis of orientation before reaching its
	 * min size.
	 */
	public getCollapsibleSize(...args: Parameters<SplitViewPanelComponentCustomElement['getCollapsibleSize']>): ReturnType<SplitViewPanelComponentCustomElement['getCollapsibleSize']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.getCollapsibleSize(...args));
	}

	/** Sets the size of content along the axis of orientation. */
	public setContentSize(...args: Parameters<SplitViewPanelComponentCustomElement['setContentSize']>): ReturnType<SplitViewPanelComponentCustomElement['setContentSize']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.setContentSize(...args));
	}

	/** Updates the provided characteristics. */
	public update(...args: Parameters<SplitViewPanelComponentCustomElement['update']>): ReturnType<SplitViewPanelComponentCustomElement['update']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.update(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<SplitViewPanelComponentCustomElement>,
		protected zone: NgZone
	) {
		defineSplitViewPanelComponent();
		changeDetectorRef.detach();
	}
}
