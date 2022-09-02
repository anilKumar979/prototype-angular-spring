import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { PlayerComponent } from './player.component';
import { MsalGuard } from '@azure/msal-angular';
const routes: Routes = [
 
  // { path: '', redirectTo: 'player/edit/:id/flash', pathMatch: 'full'},
  { path: '', redirectTo: 'player/flash', pathMatch: 'full'},
  
  { path: 'flash', component: PlayerComponent , canActivate: [MsalGuard]},  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
