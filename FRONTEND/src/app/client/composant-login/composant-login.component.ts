import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from 'src/app/core/models/Client';
import { LoginService } from 'src/app/core/services/LoginService/login.service';

@Component({
  selector: 'app-composant-login',
  templateUrl: './composant-login.component.html',
  styleUrls: ['./composant-login.component.css']
})
export class ComposantLoginComponent {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  @Output() user = new EventEmitter<Client>();

  isConnected = false
  snackBar: MatSnackBar;

  constructor(snackBar:MatSnackBar,private loginService: LoginService) { 
    this.snackBar=snackBar;
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      if(this.loginForm.value.login.invalid) {
        if(this.loginForm.value.login.errors?.['required']){
          this.snackBar.open('L\'identifiant est requis',"",{
            duration:3000
          });
        }
        if(this.loginForm.value.password.errors?.['required']){
          this.snackBar.open('Le mot de passe est requis',"",{
            duration:3000,

          });
        }
      }
    }
    else{
      this.login()
    }
  }

  login(){
    console.log('debut submit', this.loginForm.value.login, this.loginForm.value.password);
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(
      (data) => {
        this.updateUser(data);
      },
      (error) => {
        this.snackBar.open('Erreur lors de la connexion',"",{
          duration:3000
        });
      }
    );
    this.responseLogin();
  }

  responseLogin() {
    this.isConnected = true;
    this.snackBar.open('Vous êtes connecté',"",{duration:3000});
  }

  updateUser($event: any) {
    this.user.emit($event);
  }

}
