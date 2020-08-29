import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule, ToolbarModule} from 'primeng';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule
  ],
  exports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule
  ]
})
export class SharedModule { }
