import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Juan Diego';
  array = [1,2,3,4,5,6,7,8,9,10]
  pi = Math.PI;
  percent = 0.234;
  salario = 3000000;
}
