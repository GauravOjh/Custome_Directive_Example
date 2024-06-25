import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoGrowText]',
  standalone: true
})
export class AutoGrowTextDirective {

  constructor(private el:ElementRef) { }
  @HostListener('input') onInput(){
    this.el.nativeElement.style.height='auto'
    this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+ 'px';
  }
}
