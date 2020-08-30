import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule, SelectButtonModule, TableModule, TabMenuModule, ToolbarModule} from 'primeng';
import {AutorizadorService} from './services/autorizador.service';
import { AutorizadorSelectComponent } from './components/autorizador-select/autorizador-select.component';
import {FormsModule} from '@angular/forms';
import {ConverterService} from './services/converter.service';

@NgModule({
  declarations: [AutorizadorSelectComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule
  ],
  exports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    TableModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule,
    AutorizadorSelectComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AutorizadorService, ConverterService]
    };
  }

}
