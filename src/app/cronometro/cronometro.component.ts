import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit, OnDestroy {
  segundo = 0;
  private intervalo: any;

  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter<number>();

  ngOnInit() {
    this.segundo = this.inicio;
    this.intervalo = setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 === 0) {
        this.multiplo10.emit(this.segundo);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
