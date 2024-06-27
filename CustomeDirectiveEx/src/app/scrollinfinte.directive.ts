import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollinfinte]',
  standalone: true
})
export class ScrollinfinteDirective {

  constructor() { }
  @Output() appInfiniteScroll = new EventEmitter<void>();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;
    if (scrollPosition >= documentHeight) {
      this.appInfiniteScroll.emit();
    }
  }
}
