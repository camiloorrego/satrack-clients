import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ClientsComponent } from './core/clients/clients.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthenticatedGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
