import { NgModule } from '@angular/core';
import { MyCounterComponent } from './counter.component';
import { AsyncPipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  imports: [
    AsyncPipe,
    StoreModule.forFeature({ name: 'count', reducer: counterReducer }),
  ],
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
})
export class MyCounterModule {}
