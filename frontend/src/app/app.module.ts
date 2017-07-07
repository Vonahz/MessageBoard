import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MessagesComponent } from  './messages-component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';
import 'hammerjs';

var routes = [
    {
      path : '',
      component : HomeComponent
    },
    {
      path : 'messages/:name',
      component : MessagesComponent
    },
    {
      path : 'messages',
      component : MessagesComponent
    },
    {
      path : 'register',
      component : RegisterComponent
    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'user',
      component : UserComponent
    }
  ];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, BrowserAnimationsModule, HttpModule, NoopAnimationsModule, MdButtonModule, MdCheckboxModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService, AuthService ]
})
export class AppModule { }
