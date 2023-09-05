import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { RegisterGroupComponent } from './components/register-group/register-group.component';
import { PlaylistGroupComponent } from './components/playlist-group/playlist-group.component';
import { BiographyGroupComponent } from './components/biography-group/biography-group.component';
import { FavGroupComponent } from './components/fav-group/fav-group.component';
import { NewMusicComponent } from './components/new-music/new-music.component';
import { VideoclipsComponent } from './components/videoclips/videoclips.component';
import { HeaderComponent } from './components/new-music/header/header.component';
import { BodyComponent } from './components/new-music/body/body.component';


@NgModule({
  declarations: [
    RegisterGroupComponent,
    PlaylistGroupComponent,
    BiographyGroupComponent,
    FavGroupComponent,
    NewMusicComponent,
    VideoclipsComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }


