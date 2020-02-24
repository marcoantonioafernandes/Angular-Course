import { NgModule } from '@angular/core';
import { VMessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        VMessageComponent
    ],
    //Para quem quiser usar ter o acesso.
    exports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageComponent
    ]
})
export class VMessageModule{

}