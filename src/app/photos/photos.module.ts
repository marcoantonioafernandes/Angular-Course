import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';



@NgModule({
    // Declara tudo que o módulo tem. Após o componente ser declarado, fica disponível para todos os outros componentes
    //também declarados
    declarations: [
    ], 
    // O export disponibiliza o componentes para módulos externos que importem esse módulo
    imports: [
        PhotoModule,
        PhotoFormModule, 
        PhotoListModule,
    ]
})
export class PhotosModule {

}