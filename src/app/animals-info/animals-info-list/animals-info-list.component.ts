import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../shared/services/animals.service';
import Animal from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-animals-info-list',
  templateUrl: './animals-info-list.component.html',
  styleUrls: ['./animals-info-list.component.scss']
})
export class AnimalsInfoListComponent implements OnInit {
  animals: Animal[];
  currentUrlParam: string;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe( animals => {
      this.animals = animals
    });
  }
}