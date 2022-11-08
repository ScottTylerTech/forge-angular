// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { SkeletonComponent as SkeletonComponentCustomElement, defineSkeletonComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-skeleton>` custom element. */
@Component({
  selector: 'forge-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SkeletonComponent {

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<SkeletonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineSkeletonComponent();
		changeDetectorRef.detach();
	}
}