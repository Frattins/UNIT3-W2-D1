import { Component, Input } from '@angular/core';
import { iPost } from '../models/posts';

@Component({
  selector: 'app-fomr',
  templateUrl: './fomr.component.html',
  styleUrl: './fomr.component.scss'
})
export class FomrComponent {
  @Input() post!: iPost; // Ricevi l'oggetto post come input

  formVisible: boolean = false; // Variabile per gestire la visibilità del form

  toggleForm() {
    this.formVisible = !this.formVisible; // Alterna lo stato di formVisible
  }
}

