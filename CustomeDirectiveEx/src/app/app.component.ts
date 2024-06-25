import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectDirective } from './direct.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DirectDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dir=28;
}
