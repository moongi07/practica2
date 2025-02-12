import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from "./barra-progreso/barra-progreso.component";
import { TablaComponent } from "./tabla/tabla.component"; 
import { ReactiveFormsModule } from '@angular/forms';
import { OtroComponent } from "./otro/otro.component";
import { DadosComponent } from "./dados/dados.component";
import { CronometroComponent } from "./cronometro/cronometro.component";
import { SumaComponent } from "./suma/suma.component";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, ProgressBarComponent, TablaComponent, ReactiveFormsModule, OtroComponent, DadosComponent, CronometroComponent, SumaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentProgress = 50;
  title = 'prueba2'; 
  mensaje = '';

  
 increaseProgress() {
 if (this.currentProgress < 100) {
 this.currentProgress += 10;
 }
 else
 {
  this.currentProgress=0;
 }

  }


  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
