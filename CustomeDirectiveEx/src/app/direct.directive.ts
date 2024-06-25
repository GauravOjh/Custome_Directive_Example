import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirect]',
  standalone: true,
  host:{
    '(click)' : 'applyLogic()'
  }
})
export class DirectDirective {
  private el:ElementRef | undefined;
   @Input() number=0;
   @Input() isDivisbleBy=1;
  constructor(el:ElementRef) {
    this.el=el;
  }

  applyLogic(){
    if(this.number%this.isDivisbleBy===0){
      if(this.el){
        this.el.nativeElement.style.color='red';
      }
    }
    else{
      if(this.el){
        this.el.nativeElement.style.color='yellow';
      }
    }
  }

}
