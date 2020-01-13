import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const api = 'http://localhost:3000'

//Habilita a classe para injeção de dependências. provideIn: 'root' libera sua utilização
//Para outras classes
@Injectable({providedIn: 'root'})
export class PhotoService{
    // Ao invés de declarar uma variável fora do construtor para usar a injeção de dependência, podemos adicionar
    // um modificador de classe public ou private que a injeção se tornará uma variável da classe
    private http: HttpClient;
    constructor(http:HttpClient){
        this.http = http;
    }

    listFromUser(userName: string){
        return this.http
            .get<Photo[]>(`${api}/${userName}/photos`)
    }

    listFromUserPaginated(userName: string, page:number){
        const params = new HttpParams().append('page', page.toString());
        return this.http
            .get<Photo[]>(`${api}/${userName}/photos`, {params})
    }
}