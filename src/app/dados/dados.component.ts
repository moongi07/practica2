import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  valor: number = Math.floor(Math.random() * 6) + 1;
  animando = false;

  lanzarDado() {
    if (!this.animando) {
      this.animando = true;

      // Esperar a que termine la animación para cambiar el número
      setTimeout(() => {
        this.valor = Math.floor(Math.random() * 6) + 1;
        this.animando = false;
      }, 600); // La duración debe coincidir con la animación en CSS (0.6s)
    }
  }
}
