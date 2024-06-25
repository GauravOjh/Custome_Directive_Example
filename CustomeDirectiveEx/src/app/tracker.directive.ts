import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTracker]',
  standalone: true
})
export class TrackerDirective {
   clicks=0;
  constructor(private el:ElementRef) { }
  @HostListener('click') onClick(){
    this.clicks++;
    this.el.nativeElement.textContent=`Clicked ${this.clicks} times`
  }
}
