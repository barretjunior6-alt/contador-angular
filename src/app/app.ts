import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  valor = 0;

  aumentar() {
    this.valor++;
  }

  diminuir() {
    this.valor--;
  }
}