import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../../core/models/Client';
import { LoginService } from 'src/app/core/services/LoginService/login.service';

@Component({
  selector: 'app-composant-form',
  templateUrl: './composant-form.component.html',
  styleUrls: ['./composant-form.component.css']
})
export class ComposantFormComponent  {

  client:Client=new Client();
  isValid=false;
  snackBar: MatSnackBar;

  constructor(snackBar:MatSnackBar, private loginService: LoginService){
    this.snackBar=snackBar;
  }

  @Output() user = new EventEmitter<Client>();


  verifyFormData(){
    if(this.client.password != this.client.passwordConfirm){
      this.snackBar.open('Le mot de passe et la confirmation de mot de passe ne sont pas identiques',"",{
        duration:3000
      });
    }
    else if (!this.client.isComplete()){
      this.snackBar.open('Tous les champs sont requis',"",{
        duration:3000
      });
    }
    else{
      this.onSubmit();
      this.isValid = true
    }
        
  }

  onSubmit(){
    if (this.isValid){
      console.log('debut submit register', this.client);
    this.loginService.register(this.client).subscribe(
      (data) => {
        this.snackBar.open('Vous êtes bien inscrit',"",{duration:3000});
      },
      (error)=> {
        this.snackBar.open('Erreur lors de l\'inscription',"",{
          duration:3000
        });
      }
    );
    this.isValid = false;
    }
  } 

}
