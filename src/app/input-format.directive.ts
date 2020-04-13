import { Directive, HostListener, ElementRef, ViewEncapsulation, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowecase')
      this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }
}
