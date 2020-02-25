import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipetestPipe} from './pipe/pipetest.pipe';
import {AppareilService} from './service/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { PostComponent } from './post/post.component';
import {AppRoutingModule} from './app-routing.module';
import { SingleappareilcomponentComponent } from './singleappareilcomponent/singleappareilcomponent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {AuthService} from './service/auth.service';
import {UserService} from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PipetestPipe,
    AuthComponent,
    AppareilViewComponent,
    PostComponent,
    SingleappareilcomponentComponent,
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
