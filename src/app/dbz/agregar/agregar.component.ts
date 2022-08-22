import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje = new EventEmitter<any>();

  constructor(private _dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this._dbzService.agregarPersonaje(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
