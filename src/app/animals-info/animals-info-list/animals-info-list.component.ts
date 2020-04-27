import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../shared/services/animals.service';
import { Animal } from '../../shared/interfaces/interfaces';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-animals-info-list',
  templateUrl: './animals-info-list.component.html',
  styleUrls: ['./animals-info-list.component.scss']
})
export class AnimalsInfoListComponent implements OnInit {
  animals: Animal[];
  currentUrlParam: string;
  isLoading: boolean = false;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.animalsService.getAnimals().pipe(
      tap(animals => this.isLoading = false)
    ).subscribe( animals => {
      this.animals = animals
    });
  }
}