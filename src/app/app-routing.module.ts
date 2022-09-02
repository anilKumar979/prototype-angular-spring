import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
//import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import{HomeComponent} from './Components/home/home.component'

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [MsalGuard]},
  {path: '', component: HomeComponent},
  {
    path: 'post',
    canActivate: [MsalGuard],
    loadChildren: () =>
      import('./Modules/post/post.module').then((m) => m.PostModule),
  },{
    // :postId/edit
    path: 'player',
    // path:':orgId/edit',
    // path: 'player/edit/:id',
    canActivate: [MsalGuard],
    loadChildren: () =>
      import('./player/player.module').then((n) => n.PlayerModule),
  },{path:'**', redirectTo:''}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }