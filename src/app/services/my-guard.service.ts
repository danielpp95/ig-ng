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
      ( result && result.uid ) ? this.isLogged = true : this.isLogged = false
    }, err=>{
      this.isLogged = false
    })
  }

  canActivate () {
    return this.isLogged
  }
}
