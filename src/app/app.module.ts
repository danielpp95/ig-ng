import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyD8ksMXT4i-CVeJLRen3h7V60l6w5GHooo",
  authDomain: "ig-clone-cc4be.firebaseapp.com",
  databaseURL: "https://ig-clone-cc4be.firebaseio.com",
  projectId: "ig-clone-cc4be",
  storageBucket: "ig-clone-cc4be.appspot.com",
  messagingSenderId: "723802602735"
}
//
// Components
import { UploadComponent } from './upload/upload.component';
import { DashbardComponent } from './dashbard/dashbard.component';
import { AuthService } from './services/auth.service';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: DashbardComponent },
  { path: 'upload', component: UploadComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DashbardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
