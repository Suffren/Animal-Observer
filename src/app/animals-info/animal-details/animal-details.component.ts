import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AnimalsService } from '../../shared/services/animals.service';
import { Animal } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  currentUrlParam: string;
  animal: Animal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalsService: AnimalsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.currentUrlParam = params.get('animal_type');
      this.animalsService.getAnimalByTypeName(this.currentUrlParam).subscribe( results => {
        this.animal = results[0]
      });
    })
  }

  goToAnimalDetails() {
    this.router.navigate(['../', { animal_type: this.currentUrlParam }], { relativeTo: this.route });
  }
}