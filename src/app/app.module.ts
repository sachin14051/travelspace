import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AddComponent } from './shared/components/add/add.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AkkiPipe } from './shared/pipe/akki.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    PagenotfoundComponent,
    NavbarComponent,
    AkkiPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
