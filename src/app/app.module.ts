import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import {HttpClientModule} from '@angular/common/http';
import { AgoPipe } from './pipes/ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppProfileComponent,
    AgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
