import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalsService } from '../../shared/services/animals.service';
import Animal from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];
  selectedAnimal: string;
  @Output() onSelectAnimal: EventEmitter<string> = new EventEmitter();

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe( animals => {
      this.animals = animals
    });
  }

  selectAnimal(animalType: string): void {
    this.selectedAnimal = animalType;
    this.onSelectAnimal.emit(animalType);
  }
}