import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp.component';
import { Temp1Component } from './temp1/temp1.component';
import { FormsModule } from '@angular/forms';
import { Temp2Component } from './temp2/temp2.component';



@NgModule({
  declarations: [TempComponent, Temp1Component, Temp2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TempComponent]
})
export class TempModule { }
