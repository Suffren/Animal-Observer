import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { AnimalsInfoListComponent } from './animals-info-list/animals-info-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

const animalsInfoRoutes: Routes = [
  {
    path: 'animals-info',
    component: InfosComponent,
    children: [
      {
        path: '',
        component: AnimalsInfoListComponent,
        children: [
          {
            path: ':animal_type',
            component: AnimalDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(animalsInfoRoutes)],
  exports: [RouterModule]
})
export class AnimalsInfoRoutingModule { }