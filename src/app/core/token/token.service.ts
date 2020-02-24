import { Injectable } from "@angular/core";

const KEY = "authToken";
@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  hasToken() {
    return this.getToken() ? true : false;
    //Truque em JS para converter a resposta em booleano
    //return !!this.getToken();
  }

  setToken(token) {
    //Armazena a informação do token dentro do local storage
    //O local storage é uma área do navegador onde podemos armazenar uma chave e um valor
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
