import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootSharedModule } from './shared/module';
import { TodoModule } from './todo/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootSharedModule,

    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
