import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  Usuario ='';
  Clave='';
  cclave='';

  constructor(private autenticador: AngularFireAuth ) { }

  Register() {
   const { Usuario, Clave, cclave } = this;
    if (Clave !== cclave) {
      console.log('Contraseñas no coinciden.');  
    }else{
      try{
        const result = this.autenticador.createUserWithEmailAndPassword( Usuario, Clave);
      }catch(err){
       console.dir(err);
      }
    }
  }

  ngOnInit() {
  }

}
