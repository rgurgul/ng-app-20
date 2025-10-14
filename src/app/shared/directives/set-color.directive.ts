import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetColor]',
  exportAs:'appSetColor'
})
export class SetColorDirective {
  renderer = inject(Renderer2);
  element = inject(ElementRef);
  xx = 1234;

  @Input() set appSetColor(value: any) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      value
    );
  }
}
