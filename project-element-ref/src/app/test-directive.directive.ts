import { Component, Directive, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string | null = null;

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    console.log('Host clicado!', event);
    this.backgroundColor = this.backgroundColor ? null : 'yellow';
  }
}
