import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private af: AngularFireAuth ) {
    this.isLogged();
  }

  private error = err => {
    swal({
      text: err.message,
      type: 'error',
      title: 'Error'
    });
  }

  public login(mail: string, pass: string) {
    this.af.auth.signInWithEmailAndPassword(mail, pass)
      .then(  )
      .catch( this.error )
  }

  public isLogged() {
    return this.af.authState;
  }

  public logout() {
    this.af.auth.signOut();
  }


}
