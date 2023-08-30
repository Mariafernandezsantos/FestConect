import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterGroupComponent } from './modules/groups/components/register-group/register-group.component';
import { PlaylistGroupComponent } from './modules/groups/components/playlist-group/playlist-group.component';
import { NewMusicComponent } from './modules/groups/components/new-music/new-music.component';
import { VideoclipsComponent } from './modules/groups/components/videoclips/videoclips.component';
import { RegisterOrganizationComponent } from './modules/organizations/components/register-organization/register-organization.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterGroupComponent },
  { path: 'playlist', component: PlaylistGroupComponent },
  { path: 'new', component: NewMusicComponent },
  { path: 'videoclips', component: VideoclipsComponent },
  { path: 'register-org', component: RegisterOrganizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
