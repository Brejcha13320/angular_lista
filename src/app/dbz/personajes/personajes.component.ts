import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  // @Input() personajes: Personaje[] = []

  get personajes() {
    return this._dbzService.personajes;
  }

  constructor(private _dbzService: DbzService) {}

  ngOnInit(): void {}
}
