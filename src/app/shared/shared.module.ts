import { NgModule } from '@angular/core';
import { HighlightSearch } from './pipes/highlight.pipe';

@NgModule({
  imports: [],
  declarations: [ 
    HighlightSearch
  ],
  exports: [
    HighlightSearch
  ]
})
export class PipesModule {}