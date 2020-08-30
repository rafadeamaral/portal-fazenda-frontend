import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectItem} from 'primeng';
import {AutorizadorService} from '../../services/autorizador.service';

@Component({
  selector: 'app-autorizador-select',
  templateUrl: './autorizador-select.component.html',
  styleUrls: ['./autorizador-select.component.sass']
})
export class AutorizadorSelectComponent implements OnInit {

  @Output() changeValue = new EventEmitter<number>();

  options: SelectItem[];
  value: number;

  constructor(private autorizadorService: AutorizadorService) { }

  ngOnInit(): void {
    this.autorizadorService.findAll().subscribe(autorizadores => {
      this.options = autorizadores.map(autorizador => ({label: autorizador.dsAutorizador, value: autorizador.idAutorizador}));
      if (this.options.length > 0) {
        this.value = this.options[0].value;
        this.onChange(this.value);
      }
    });
  }

  onChange(id: number): void {
    this.changeValue.emit(id);
  }

}
