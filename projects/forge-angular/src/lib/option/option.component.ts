// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { OptionComponent as OptionComponentCustomElement, defineOptionComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-option>` element. */
@Component({
  selector: 'forge-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class OptionComponent {

	/** Gets/sets the value of this option. */
	@Input()
	public set value(value: OptionComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): OptionComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}

	/** Gets/sets the label of this option. */
	@Input()
	public set label(value: OptionComponentCustomElement['label']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.label = value;
		});
	}

	public get label(): OptionComponentCustomElement['label'] {
		return this.elementRef.nativeElement.label;
	}

	/** Gets/sets the secondary label of this option. */
	@Input()
	public set secondaryLabel(value: OptionComponentCustomElement['secondaryLabel']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.secondaryLabel = value;
		});
	}

	public get secondaryLabel(): OptionComponentCustomElement['secondaryLabel'] {
		return this.elementRef.nativeElement.secondaryLabel;
	}

	/** Gets/sets the disabled status of this option. */
	@Input()
	public set disabled(value: OptionComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): OptionComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}

	/** Gets/sets the whether this option is a divider. */
	@Input()
	public set divider(value: OptionComponentCustomElement['divider'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.divider = value != null && `${value}` !== 'false';
		});
	}

	public get divider(): OptionComponentCustomElement['divider'] {
		return this.elementRef.nativeElement.divider;
	}

	/** Gets/sets the classes of this option. */
	@Input()
	public set optionClass(value: OptionComponentCustomElement['optionClass']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.optionClass = value;
		});
	}

	public get optionClass(): OptionComponentCustomElement['optionClass'] {
		return this.elementRef.nativeElement.optionClass;
	}

	/** Gets/sets the leading icon of this option. */
	@Input()
	public set leadingIcon(value: OptionComponentCustomElement['leadingIcon']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.leadingIcon = value;
		});
	}

	public get leadingIcon(): OptionComponentCustomElement['leadingIcon'] {
		return this.elementRef.nativeElement.leadingIcon;
	}

	/** Gets/sets the leading icon class of this option. */
	@Input()
	public set leadingIconClass(value: OptionComponentCustomElement['leadingIconClass']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.leadingIconClass = value;
		});
	}

	public get leadingIconClass(): OptionComponentCustomElement['leadingIconClass'] {
		return this.elementRef.nativeElement.leadingIconClass;
	}

	/** Gets/sets the leading icon type of this option. */
	@Input()
	public set leadingIconType(value: OptionComponentCustomElement['leadingIconType']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.leadingIconType = value;
		});
	}

	public get leadingIconType(): OptionComponentCustomElement['leadingIconType'] {
		return this.elementRef.nativeElement.leadingIconType;
	}

	/** Gets/sets properties on leading icon component. */
	@Input()
	public set leadingIconComponentProps(value: OptionComponentCustomElement['leadingIconComponentProps']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.leadingIconComponentProps = value;
		});
	}

	public get leadingIconComponentProps(): OptionComponentCustomElement['leadingIconComponentProps'] {
		return this.elementRef.nativeElement.leadingIconComponentProps;
	}

	/** Gets/sets the trailing icon of this option. */
	@Input()
	public set trailingIcon(value: OptionComponentCustomElement['trailingIcon']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.trailingIcon = value;
		});
	}

	public get trailingIcon(): OptionComponentCustomElement['trailingIcon'] {
		return this.elementRef.nativeElement.trailingIcon;
	}

	/** Gets/sets the trailing icon class of this option. */
	@Input()
	public set trailingIconClass(value: OptionComponentCustomElement['trailingIconClass']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.trailingIconClass = value;
		});
	}

	public get trailingIconClass(): OptionComponentCustomElement['trailingIconClass'] {
		return this.elementRef.nativeElement.trailingIconClass;
	}

	/** Gets/sets the trailing icon type of this option. */
	@Input()
	public set trailingIconType(value: OptionComponentCustomElement['trailingIconType']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.trailingIconType = value;
		});
	}

	public get trailingIconType(): OptionComponentCustomElement['trailingIconType'] {
		return this.elementRef.nativeElement.trailingIconType;
	}

	/** Gets/sets properties on trailing icon component. */
	@Input()
	public set trailingIconComponentProps(value: OptionComponentCustomElement['trailingIconComponentProps']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.trailingIconComponentProps = value;
		});
	}

	public get trailingIconComponentProps(): OptionComponentCustomElement['trailingIconComponentProps'] {
		return this.elementRef.nativeElement.trailingIconComponentProps;
	}

	/** Gets/sets the leading builder of this option. */
	@Input()
	public set leadingBuilder(value: OptionComponentCustomElement['leadingBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.leadingBuilder = value;
		});
	}

	public get leadingBuilder(): OptionComponentCustomElement['leadingBuilder'] {
		return this.elementRef.nativeElement.leadingBuilder;
	}

	/** Gets/sets the trailing builder of this option. */
	@Input()
	public set trailingBuilder(value: OptionComponentCustomElement['trailingBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.trailingBuilder = value;
		});
	}

	public get trailingBuilder(): OptionComponentCustomElement['trailingBuilder'] {
		return this.elementRef.nativeElement.trailingBuilder;
	}


	public initializedCallback(...args: Parameters<OptionComponentCustomElement['initializedCallback']>): ReturnType<OptionComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<OptionComponentCustomElement>,
		protected zone: NgZone
	) {
		defineOptionComponent();
		changeDetectorRef.detach();
	}
}
