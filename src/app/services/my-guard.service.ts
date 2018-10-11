import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardService implements CanActivate {

  isLogged = false;

  constructor( private auth: AuthService ) {
    auth.isLogged().subscribe(result=>{
      this.isLogged = result.uid ? true : false
    }, err=>{
      this.isLogged = false
    })
  }

  canActivate () {
    return this.isLogged
  }
}
