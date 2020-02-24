import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient,
    private tokenService:TokenService) { }

  authenticate(userName: string, password: string){
    //Quando o nome da variável do objeto é o mesmo do parâmetro podemos deixar apenas o nome do parâmetro
    // O pipe permite aplicar operações entre a requisição e o subscribe, como por exemplo a aplicação
    //de filtros, timeout, etc. Vamos utiliza-lá para recuperar os tokens

    //O tap é utilizado para acessar algum recurso antes do subscribe.
    //Geralmente utilizado para acessar algum valor que deve ser guardado na aplicação

    //observe: 'response' => nos dá acesso ao cabeçalho e a tudo que vem junto com o response
    return this.http.post(
      API_URL + '/user/login', 
      {userName: userName, password: password}, 
      {observe: 'response'})
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token')
      this.tokenService.setToken(authToken);
      console.log(`user ${userName} authenticated  with token ${authToken}`);
    }))
  }
}
