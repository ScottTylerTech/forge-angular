// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { StepComponent as StepComponentCustomElement, defineStepComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-step>` custom element. */
@Component({
  selector: 'forge-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StepComponent {


	@Input()
	public set alternative(value: StepComponentCustomElement['alternative'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.alternative = value != null && `${value}` !== 'false';
		});
	}

	public get alternative(): StepComponentCustomElement['alternative'] {
		return this.elementRef.nativeElement.alternative;
	}


	@Input()
	public set index(value: StepComponentCustomElement['index'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.index = +value;
		});
	}

	public get index(): StepComponentCustomElement['index'] {
		return this.elementRef.nativeElement.index;
	}


	@Input()
	public set editable(value: StepComponentCustomElement['editable'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.editable = value != null && `${value}` !== 'false';
		});
	}

	public get editable(): StepComponentCustomElement['editable'] {
		return this.elementRef.nativeElement.editable;
	}


	@Input()
	public set completed(value: StepComponentCustomElement['completed'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.completed = value != null && `${value}` !== 'false';
		});
	}

	public get completed(): StepComponentCustomElement['completed'] {
		return this.elementRef.nativeElement.completed;
	}


	@Input()
	public set error(value: StepComponentCustomElement['error'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.error = value != null && `${value}` !== 'false';
		});
	}

	public get error(): StepComponentCustomElement['error'] {
		return this.elementRef.nativeElement.error;
	}


	@Input()
	public set selected(value: StepComponentCustomElement['selected'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selected = value != null && `${value}` !== 'false';
		});
	}

	public get selected(): StepComponentCustomElement['selected'] {
		return this.elementRef.nativeElement.selected;
	}


	@Input()
	public set disabled(value: StepComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): StepComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}


	@Input()
	public set vertical(value: StepComponentCustomElement['vertical'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.vertical = value != null && `${value}` !== 'false';
		});
	}

	public get vertical(): StepComponentCustomElement['vertical'] {
		return this.elementRef.nativeElement.vertical;
	}


	@Input()
	public set expanded(value: StepComponentCustomElement['expanded'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.expanded = value != null && `${value}` !== 'false';
		});
	}

	public get expanded(): StepComponentCustomElement['expanded'] {
		return this.elementRef.nativeElement.expanded;
	}


	@Input()
	public set ignoreUserExpansion(value: StepComponentCustomElement['ignoreUserExpansion'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.ignoreUserExpansion = value != null && `${value}` !== 'false';
		});
	}

	public get ignoreUserExpansion(): StepComponentCustomElement['ignoreUserExpansion'] {
		return this.elementRef.nativeElement.ignoreUserExpansion;
	}


	public focus(...args: Parameters<StepComponentCustomElement['focus']>): ReturnType<StepComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.focus(...args));
	}


	public setStepTabIndex(...args: Parameters<StepComponentCustomElement['setStepTabIndex']>): ReturnType<StepComponentCustomElement['setStepTabIndex']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.setStepTabIndex(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<StepComponentCustomElement>,
		protected zone: NgZone
	) {
		defineStepComponent();
		changeDetectorRef.detach();
	}
}