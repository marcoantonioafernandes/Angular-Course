import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    //O form group tem que controlar o form do template;
    loginForm: FormGroup;
    // <>Posso tipar ou não
    @ViewChild('userNameInput', null) userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService){
    }

    ngOnInit(): void {
        //O primeiro valor atribuido para os campos é o valor exibido no navegador
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(){
        console.log('Vai autenticar')
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password)
        .subscribe(
            result => {
                console.log('autenticado: ', result);
                this.router.navigate(['user', userName])
            },
            error => {
                console.log('error => ', error);
                alert('Invalid username and password');
                //O angular precisa identificar onde está sendo renderizado,
                //se é no navegador ou no server side....
                //Validando se a manipulação está sendo feita no navegador
                this.platformDetectorService.isPlatformBrowser()?this.userNameInput.nativeElement.focus():null;
                this.loginForm.reset();
            }
        );
    }
}