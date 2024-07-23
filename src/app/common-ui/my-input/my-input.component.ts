import { Component, Input } from '@angular/core';

interface InputParams extends Partial<HTMLInputElement> {
  myType?: string;
}

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css',
})
export class MyInputComponent {
  @Input() params: InputParams = {} as InputParams;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.params);
  }
}
