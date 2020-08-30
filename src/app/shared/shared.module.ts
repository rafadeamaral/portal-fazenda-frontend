import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectButtonModule, TableModule, TabMenuModule, ToolbarModule} from 'primeng';
import {AutorizadorService} from './services/autorizador.service';
import { AutorizadorSelectComponent } from './components/autorizador-select/autorizador-select.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AutorizadorSelectComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    SelectButtonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ToolbarModule,
    TabMenuModule,
    TableModule,
    SelectButtonModule,
    FormsModule,
    AutorizadorSelectComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AutorizadorService]
    };
  }

}
