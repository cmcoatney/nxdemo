import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UiModule } from '@podname/ui'

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, UiModule ,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
