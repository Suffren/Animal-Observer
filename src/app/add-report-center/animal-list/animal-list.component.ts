import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalsService } from '../../shared/services/animals.service';
import { Animal } from '../../shared/interfaces/interfaces';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];
  selectedAnimal: string;
  isLoading: boolean;
  @Output() onSelectAnimal: EventEmitter<string> = new EventEmitter();
  @Output() onPending: EventEmitter<boolean> = new EventEmitter();

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.animalsService.getAnimals().pipe(
      tap(animals => {
        this.isLoading = false;
        this.onPending.emit(this.isLoading)
      })
    ).subscribe( animals => {
      this.animals = animals
    });
  }

  selectAnimal(animalType: string): void {
    this.selectedAnimal = animalType;
    this.onSelectAnimal.emit(animalType);
  }
}