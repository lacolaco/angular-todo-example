import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoStore } from './stores/todo.store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: RootSharedModule,
    };
  }
}

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [
    TodoStore,
  ],
})
export class RootSharedModule {
}
