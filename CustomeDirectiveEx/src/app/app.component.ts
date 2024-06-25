import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectDirective } from './direct.directive';
import { TrackerDirective } from './tracker.directive';
import { HoverTextDirective } from './hover-text.directive';
import { AutoGrowTextDirective } from './auto-grow-text.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DirectDirective,TrackerDirective,HoverTextDirective,AutoGrowTextDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dir=28;
}
