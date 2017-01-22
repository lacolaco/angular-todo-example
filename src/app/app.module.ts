import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppStore } from './app.store';
import { SharedModule } from './shared/module';
import { TodoModule } from './todo/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),

    TodoModule,
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
