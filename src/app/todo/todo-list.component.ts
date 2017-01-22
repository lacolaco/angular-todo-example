import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Todo } from '../shared/models/todo';
import { TodoStore } from '../shared/stores/todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  constructor(protected store: TodoStore) {
  }

  ngOnInit() {
  }

  updateTodo(todo: Todo) {
    this.store.update(todo.id, todo);
  }

  removeTodo(todo: Todo) {
    this.store.delete(todo.id);
  }
}
