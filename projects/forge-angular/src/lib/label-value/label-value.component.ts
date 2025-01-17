// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { LabelValueComponent as LabelValueComponentCustomElement, defineLabelValueComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-label-value>` custom element. */
@Component({
  selector: 'forge-label-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class LabelValueComponent {

	/** Gets/sets the empty state. */
	@Input()
	public set empty(value: LabelValueComponentCustomElement['empty'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.empty = value != null && `${value}` !== 'false';
		});
	}

	public get empty(): LabelValueComponentCustomElement['empty'] {
		return this.elementRef.nativeElement.empty;
	}

	/** Gets/sets the wrap-content attribute. */
	@Input()
	public set ellipsis(value: LabelValueComponentCustomElement['ellipsis'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.ellipsis = value != null && `${value}` !== 'false';
		});
	}

	public get ellipsis(): LabelValueComponentCustomElement['ellipsis'] {
		return this.elementRef.nativeElement.ellipsis;
	}

	/** Controls the density type. */
	@Input()
	public set density(value: LabelValueComponentCustomElement['density']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.density = value;
		});
	}

	public get density(): LabelValueComponentCustomElement['density'] {
		return this.elementRef.nativeElement.density;
	}

	/** Gets/sets the alignment. */
	@Input()
	public set align(value: LabelValueComponentCustomElement['align']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.align = value;
		});
	}

	public get align(): LabelValueComponentCustomElement['align'] {
		return this.elementRef.nativeElement.align;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<LabelValueComponentCustomElement>,
		protected zone: NgZone
	) {
		defineLabelValueComponent();
		changeDetectorRef.detach();
	}
}
