import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolltoTop]',
  standalone: true
})
export class ScrolltoTopDirective {
 @HostListener('click') onClick(){
  window.scrollTo({top:0,behavior:'smooth'})
 }
}
