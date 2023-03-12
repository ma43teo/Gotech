import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
  Usuario= '';
  Clave='';
  constructor(private autenticador: AngularFireAuth,
              private router: Router) { }
  
  Login(){
    const {Usuario, Clave} = this;
    this.autenticador.signInWithEmailAndPassword( Usuario, Clave)
    .then((res:any) => this.router.navigate(['home']))
    .catch((error:any) => console.dir(error));
    }
  ngOnInit() {
  }
  Register(){
   this.router.navigate(['register']);
  }

}
