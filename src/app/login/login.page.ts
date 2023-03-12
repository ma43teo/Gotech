import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
  Usuario= '';
  Clave='';
  constructor(private autenticador: AngularFireAuth) { }
  
  Login(){
    const {Usuario, Clave} = this;
    this.autenticador.signInWithEmailAndPassword( Usuario, Clave)
    .then((res:any) => console.log(res))
    .catch((error:any) => console.dir(error));
    }
  ngOnInit() {
  }

}
