import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[plugin]'
})
export class TNSYourPluginDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, 'class', 'sample-class');
  }
}
