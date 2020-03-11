import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mammals } from '../../../assets/mammals';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animals = Mammals;
  selectedAnimal: string;
  @Output() onSelectAnimal: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  selectAnimal(animalType: string): void {
    this.selectedAnimal = animalType;
    this.onSelectAnimal.emit(animalType);
  }
}