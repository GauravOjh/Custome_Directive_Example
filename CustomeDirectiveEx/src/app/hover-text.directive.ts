import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverText]',
  standalone: true
})
export class HoverTextDirective {
 
  constructor(private el:ElementRef,private Renderer:Renderer2) { }
  @HostListener('mouseenter') OnMouseEnter(){
     this.Renderer.setStyle(this.el.nativeElement,'color','red');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.Renderer.removeStyle(this.el.nativeElement,'color');
 }

}
