import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomBgTags]'
})
export class RandomBgTagsDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    this.el.nativeElement.style.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  }

}
