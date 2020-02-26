import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mammals } from '../../assets/mammals';

@Component({
  selector: 'app-mammal-list',
  templateUrl: './mammal-list.component.html',
  styleUrls: ['./mammal-list.component.scss']
})
export class MammalListComponent implements OnInit {
  mammals = Mammals;
  selectedAnimal: string;
  @Output() onSelectAnimal: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  selectAnimal(animalType: string): void {
    this.selectedAnimal = animalType;
    this.onSelectAnimal.emit(animalType);
  }
}