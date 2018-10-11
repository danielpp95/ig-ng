import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ig-clone';

  isLogged = false;

  constructor( private auth: AuthService ) {
    auth.isLogged().subscribe(result=>{
      ( result && result.uid ) ? this.isLogged = true : this.isLogged = false
    }, err=>{
      this.isLogged = false
    })
  }

  public logout() {
    this.auth.logout()
  }
}
