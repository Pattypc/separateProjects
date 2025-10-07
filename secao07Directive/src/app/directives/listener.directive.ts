import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]',
})
export class ListenerDirective {
    @HostListener('click')
    onClick() {
        console.log('clicou');
    }

    @HostListener('keyup', ['$event', '"Meu Argumento"'])
    onKeyUp(event: Event, param2: string) {
        // console.log('Digitou', event);
        console.log(param2);

        const fullText = (event.target as HTMLInputElement).value;

        console.log(fullText);
    }
}
