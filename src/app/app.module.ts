import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ShowComponent } from './thanks/show/show.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

//claro que nao devia estar nesse commit..
//mas nao se preocupem rs
//esta hardcoded de proposito, nao tem dados sensiveis o firebase sera apagado apos os testes
const firebaseConfig = {
  apiKey: "AIzaSyA1_visug15J5JxKq21OOeONets9idUsu4",
  authDomain: "phchithanku.firebaseapp.com",
  projectId: "phchithanku",
  storageBucket: "phchithanku.appspot.com",
  messagingSenderId: "474237522250",
  appId: "1:474237522250:web:84a7c0db24c154164131b3"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThanksComponent,
    ShowComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
