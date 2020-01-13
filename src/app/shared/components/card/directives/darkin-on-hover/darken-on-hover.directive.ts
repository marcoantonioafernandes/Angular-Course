import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';


//Para utilizar a diretiva em uma tag como atributo devemos colocar entre[]
//Ex como atributo: <a DarkOnHover> <a/>
@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
    @Input() brightness = '80%';

    //ElementRef -> Fornece acesso ao elemento do dom
    constructor(
        private el: ElementRef,
        private render: Renderer
        ){
    }
    //HostListener => Informa ao evento qual elemento do dom que ele deve responder
    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(100%)`);
    }
}