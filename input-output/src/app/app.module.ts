import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilhoComponent } from './filho/filho.component';
import { PaiComponent } from './pai/pai.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    PaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
