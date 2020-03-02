import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsInfoRoutingModule } from './animals-info-routing.module';
import { InfosComponent } from './infos/infos.component';
import { AnimalsInfoListComponent } from './animals-info-list/animals-info-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  declarations: [
    InfosComponent,
    AnimalsInfoListComponent,
    AnimalDetailsComponent
  ],
  imports: [
    CommonModule,
    AnimalsInfoRoutingModule
  ]
})
export class AnimalsInfoModuleModule { }
