// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeStepModule } from '../step';
import { StepperComponent } from './stepper.component';

@NgModule({
	imports: [CommonModule, ForgeStepModule],
	declarations: [StepperComponent],
	exports: [StepperComponent, ForgeStepModule]
})
export class ForgeStepperModule {}