import { Component } from '@angular/core';
import { MyInputComponent } from '@common-ui/my-input/my-input.component';
import { MyCounterModule } from '../../../store/counter.module';

@Component({
  selector: 'app-store-form',
  standalone: true,
  imports: [MyInputComponent, MyCounterModule],
  templateUrl: './store-form.component.html',
  styleUrl: './store-form.component.css',
})
export class StoreFormComponent {}
