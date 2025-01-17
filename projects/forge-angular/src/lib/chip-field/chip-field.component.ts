// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ChipFieldComponent as ChipFieldComponentCustomElement, defineChipFieldComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-chip-field>` custom element. */
@Component({
  selector: 'forge-chip-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChipFieldComponent {

	/** Controls whether or not the value should be set onBlur */
	@Input()
	public set addOnBlur(value: ChipFieldComponentCustomElement['addOnBlur'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.addOnBlur = value != null && `${value}` !== 'false';
		});
	}

	public get addOnBlur(): ChipFieldComponentCustomElement['addOnBlur'] {
		return this.elementRef.nativeElement.addOnBlur;
	}

	/** Controls the density type. */
	@Input()
	public set density(value: ChipFieldComponentCustomElement['density']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.density = value;
		});
	}

	public get density(): ChipFieldComponentCustomElement['density'] {
		return this.elementRef.nativeElement.density;
	}

	/** Whether the label should always float, never float or float as the user types. */
	@Input()
	public set floatLabelType(value: ChipFieldComponentCustomElement['floatLabelType']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.floatLabelType = value;
		});
	}

	public get floatLabelType(): ChipFieldComponentCustomElement['floatLabelType'] {
		return this.elementRef.nativeElement.floatLabelType;
	}

	/** The shape type to use. */
	@Input()
	public set shape(value: ChipFieldComponentCustomElement['shape']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.shape = value;
		});
	}

	public get shape(): ChipFieldComponentCustomElement['shape'] {
		return this.elementRef.nativeElement.shape;
	}

	/** Gets/sets the invalid state. */
	@Input()
	public set invalid(value: ChipFieldComponentCustomElement['invalid'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.invalid = value != null && `${value}` !== 'false';
		});
	}

	public get invalid(): ChipFieldComponentCustomElement['invalid'] {
		return this.elementRef.nativeElement.invalid;
	}

	/** Gets/sets the required state which controls the visibility of the asterisk in the label. */
	@Input()
	public set required(value: ChipFieldComponentCustomElement['required'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.required = value != null && `${value}` !== 'false';
		});
	}

	public get required(): ChipFieldComponentCustomElement['required'] {
		return this.elementRef.nativeElement.required;
	}

	/** Controls whether the label should be floating or not. */
	public floatLabel(...args: Parameters<ChipFieldComponentCustomElement['floatLabel']>): ReturnType<ChipFieldComponentCustomElement['floatLabel']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.floatLabel(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ChipFieldComponentCustomElement>,
		protected zone: NgZone
	) {
		defineChipFieldComponent();
		changeDetectorRef.detach();
	}
}
