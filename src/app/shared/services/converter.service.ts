import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable()
export class ConverterService {

  constructor(private datePipe: DatePipe) { }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss');
  }

}
