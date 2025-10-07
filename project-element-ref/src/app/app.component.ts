import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('minhaDiv') myDiv!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.renderer.setStyle(this.minhaDiv.nativeElement, 'backgroundColor', 'red');
    this.renderer.addClass(this.minhaDiv.nativeElement, 'minha-classe');
  }

    @ViewChild('minhaDiv') minhaDiv!: ElementRef;

  constructor(private renderer: Renderer2) {}
}
