import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { RrssOrganizationComponent } from './components/rrss-organization/rrss-organization.component';
import { RegisterOrganizationComponent } from './components/register-organization/register-organization.component';
import { InfoFestComponent } from './components/info-fest/info-fest.component';
import { PlaylistVideosFestComponent } from './components/playlist-videos-fest/playlist-videos-fest.component';


@NgModule({
  declarations: [
    RrssOrganizationComponent,
    RegisterOrganizationComponent,
    InfoFestComponent,
    PlaylistVideosFestComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule
  ]
})
export class OrganizationsModule { }
