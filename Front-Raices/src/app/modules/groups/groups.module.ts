import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { RegisterGroupComponent } from './components/register-group/register-group.component';
import { PlaylistGroupComponent } from './components/playlist-group/playlist-group.component';
import { BiografyGroupComponent } from './components/biografy-group/biografy-group.component';
import { RrssGroupComponent } from './components/rrss-group/rrss-group.component';
import { NewMusicComponent } from './components/new-music/new-music.component';
import { VideoclipsComponent } from './components/videoclips/videoclips.component';


@NgModule({
  declarations: [
    RegisterGroupComponent,
    PlaylistGroupComponent,
    BiografyGroupComponent,
    RrssGroupComponent,
    NewMusicComponent,
    VideoclipsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
