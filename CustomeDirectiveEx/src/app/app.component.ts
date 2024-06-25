import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectDirective } from './direct.directive';
import { TrackerDirective } from './tracker.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DirectDirective,TrackerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dir=28;
}
