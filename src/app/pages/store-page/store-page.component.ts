import { Component } from '@angular/core';
import { IndexModule } from '../../sections/store-section/store-section.module';

@Component({
  standalone: true,
  imports: [IndexModule],
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css',
})
export class StorePageComponent {}
