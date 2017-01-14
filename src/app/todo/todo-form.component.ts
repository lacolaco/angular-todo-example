import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  constructor(private todoService: TodoService) { }

  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const todo = new Todo(form.value.text);
    this.todoService.insert(todo);
    form.reset();
  }

}
