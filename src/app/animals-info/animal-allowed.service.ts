import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnimalAllowedService implements Resolve<null> {
  allowedAnimals: any = ['squirrel', 'bat', 'boar', 'fox', 'deer', 'rabbit']; // TODO: get animals with http request

  constructor(
    private router: Router,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, router) {

      const animal = route.paramMap.get('animal_type');

      if(this.allowedAnimals.includes(animal)) {
          return null;
      } else {
          this.router.navigate(['404']);
      }           
  }
}
