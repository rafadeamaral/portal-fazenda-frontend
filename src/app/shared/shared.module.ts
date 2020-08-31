import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarModule,
  CardModule,
  PaginatorModule,
  ProgressSpinnerModule,
  SelectButtonModule,
  TableModule,
  TabMenuModule,
  ToolbarModule
} from 'primeng';
import {AutorizadorService} from './services/autorizador.service';
import { AutorizadorSelectComponent } from './components/autorizador-select/autorizador-select.component';
import {FormsModule} from '@angular/forms';
import {ConverterService} from './services/converter.service';
import { ServicoStatusPipe } from './pipes/servico-status.pipe';
import { ProgressTableComponent } from './components/progress-table/progress-table.component';

@NgModule({
  declarations: [AutorizadorSelectComponent, ServicoStatusPipe, ProgressTableComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule,
    ProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    TableModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule,
    CardModule,
    PaginatorModule,
    AutorizadorSelectComponent,
    ServicoStatusPipe,
    ProgressTableComponent
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
