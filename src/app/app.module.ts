import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignUpComponent, SignInComponent } from './components/components.index';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, SignUpComponent, SignInComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
