import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SobreComponent } from './thanks/sobre/sobre.component';
import { AdaptComponent } from './thanks/adapt/adapt.component';
import { CoolComponent } from './thanks/cool/cool.component';
import { ImpactComponent } from './thanks/impact/impact.component';

// Services
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThanksComponent,
    SobreComponent,
    NavbarComponent,
    HeaderComponent,
    AdaptComponent,
    CoolComponent,
    ImpactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
