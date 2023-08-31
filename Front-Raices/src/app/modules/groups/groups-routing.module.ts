import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/new-music/header/header.component';
import { BodyComponent } from './components/new-music/body/body.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'body', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
