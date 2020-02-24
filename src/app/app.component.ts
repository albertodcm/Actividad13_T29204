import { Component, OnInit } from '@angular/core';
import { NotaService } from './services/nota.service';
// import { Nota } from 'src/models/nota.model';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'Notas';
  Notas = [];
  prueba = '';

  constructor() {}

  ngOnInit() {
    $('.collapsible').collapsible();
  }

  nota(Titulo: HTMLInputElement, Texto: HTMLInputElement) {
    if (Titulo.value === '') {
      alert('Su nota tiene que tener un titulo');
    } else if (Texto.value === '') {
      alert('Su nota tiene que tener texto');
    } else {
      const crearNota = new Nota(Titulo.value, Texto.value);
      this.Notas.unshift(crearNota);
    }
  }
}

class Nota {
  titulo: any;
  texto: any;
  constructor(Titulo, Texto) {
    this.titulo = Titulo;
    this.texto = Texto;
  }
}

