import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { KeyComponent } from './key/key.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NoteNamePipe } from './note-name.pipe';
import { NoteGameComponent } from './note-game/note-game.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';
import { NoteSettingsComponent } from './note-settings/note-settings.component';
import { TempoSelectorComponent } from './tempo-selector/tempo-selector.component';
import { NNotesSelectorComponent } from './n-notes-selector/n-notes-selector.component';
import { TimePipe } from './time.pipe'
import { FirstNoteOptsComponent } from './first-note-opts/first-note-opts.component';
import { StopClickPropagationDirective } from './stop-click-propagation.directive';
import { NeonDivComponent } from './neon-div/neon-div.component';
import { LimitToComponent } from './limit-to/limit-to.component'
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    KeyComponent,
    KeyboardComponent,
    NoteNamePipe,
    NoteGameComponent,
    GameComponent,
    ResultsComponent,
    NoteSettingsComponent,
    TempoSelectorComponent,
    NNotesSelectorComponent,
    TimePipe,
    FirstNoteOptsComponent,
    StopClickPropagationDirective,
    NeonDivComponent,
    LimitToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
