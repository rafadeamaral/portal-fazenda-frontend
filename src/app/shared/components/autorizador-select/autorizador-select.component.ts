import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectItem} from 'primeng';
import {AutorizadorService} from '../../services/autorizador.service';
import {finalize} from 'rxjs/operators';

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
    this.findAll();
  }

  findAll(): void {
    this.autorizadorService.findAll()
      .pipe(finalize(() => {
        this.onChange(this.value);
        if (!this.value) {
          setTimeout(() => this.findAll(), 60000);
        }
      }))
      .subscribe(autorizadores => {
        this.options = autorizadores.map(autorizador => ({label: autorizador.dsAutorizador, value: autorizador.idAutorizador}));
        if (this.options.length > 0) {
          this.value = this.options[0].value;
        }
      });
  }

  onChange(id: number): void {
    this.changeValue.emit(id);
  }

}
