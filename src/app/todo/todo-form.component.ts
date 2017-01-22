import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../shared/models/todo';
import { TodoStore } from '../shared/stores/todo.store';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  constructor(private store: TodoStore) { }

  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const todo = new Todo(form.value.text);
    this.store.insert(todo);
    form.reset();
  }

}
