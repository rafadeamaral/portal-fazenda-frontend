import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule, SelectButtonModule, TableModule, TabMenuModule, ToolbarModule} from 'primeng';
import {AutorizadorService} from './services/autorizador.service';
import { AutorizadorSelectComponent } from './components/autorizador-select/autorizador-select.component';
import {FormsModule} from '@angular/forms';
import {ConverterService} from './services/converter.service';
import { ServicoStatusPipe } from './pipes/servico-status.pipe';

@NgModule({
  declarations: [AutorizadorSelectComponent, ServicoStatusPipe],
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
    AutorizadorSelectComponent,
    ServicoStatusPipe
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
