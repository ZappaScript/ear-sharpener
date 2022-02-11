import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteGameComponent } from './note-game/note-game.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';
import { NoteSettingsComponent } from './note-settings/note-settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes/settings',
    pathMatch: 'full'
  },
  {
    
    path:'notes',
    component: NoteGameComponent,
    children: [
      {
        path:'settings',
        component: NoteSettingsComponent
      },
      {
      path:'game',
      component: GameComponent
    },
    {path:'results', component:ResultsComponent}
  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
