import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SingleappareilcomponentComponent} from './singleappareilcomponent/singleappareilcomponent.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GuardGuard} from './guard/guard.guard';
import {EditAppareilComponent} from './edit-appareil/edit-appareil.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  { path: 'appareils', canActivate: [GuardGuard], component: AppareilViewComponent },
  { path: 'appareil/:id', canActivate: [GuardGuard], component: SingleappareilcomponentComponent },
  { path: 'edit', canActivate: [GuardGuard], component: EditAppareilComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
