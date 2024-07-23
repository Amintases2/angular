import { NgModule } from '@angular/core';
import { StoreSectionComponent } from './store-section.component';
import { StoreFormComponent } from './store-form/store-form.component';

@NgModule({
  imports: [StoreFormComponent],
  exports: [StoreSectionComponent],
  declarations: [StoreSectionComponent],
  providers: [],
})
export class IndexModule {}
