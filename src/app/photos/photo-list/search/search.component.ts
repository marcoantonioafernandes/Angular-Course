import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-item-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    @Output() onTyping:EventEmitter<string> = new EventEmitter<string>();
    @Input() value:string = '';
    debounce: Subject<string> = new Subject<string>();
    ngOnInit(): void {
        //Estou lendo filter da minha inscrição.
        //Enquanto está emitindo valor, o subscribe estará escutando
        this.debounce
            //Só permite chegar no subscribe apenas após o usuário parar por 300ms a digitação
            .pipe(debounceTime(300))
            .subscribe(filter => {
                //emitindo o evento para o componente pai
                this.onTyping.emit(filter)
            })
    }

    ngOnDestroy(): void {
        //Estamos utilizando um debounce sem completar (.complete()), pois não sabemos quando o usuário vai parar de digitar
        //Porém quando o usuário sai da página o espaço alocado na memória pelo subscribe continua alocado,
        //pois não completamos. Para resolver esse problema usamos o método ngOnDestroy, que faz parte do ciclo
        //de vida do angular e é chamado quando carregamos outros componentes. Dessa forma encerramos nosso subscribe
        //e desalocamos o espaço de memória, evitando assim possíveis erros na aplicação
        this.debounce.unsubscribe();
    }





    
}