import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { ChooseCardComponent } from './choose-card/choose-card.component';
import { CertaintyComponent } from './certainty/certainty.component';
import { ShowCardComponent } from './show-card/show-card.component';

const appRoutes: Routes = [
  { path: 'start-game', component: StartGameComponent },
  { path: 'choose-card',      component: ChooseCardComponent },
  { path: 'certainty/:index', component: CertaintyComponent },
  { path: 'show-card', component: ShowCardComponent },
  { path: '',
    redirectTo: '/start-game',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    ChooseCardComponent,
    CertaintyComponent,
    ShowCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
