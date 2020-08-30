import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.sass']
})
export class ProgressTableComponent implements OnInit {

  progress = false;
  message = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    setTimeout(() => this.message = true, 10);
  }

  hideMessage(): void {
    this.message = false;
    this.progress = true;
  }

  hideProgress(message: boolean): void {
    this.progress = false;
    this.message = message;
  }

}
