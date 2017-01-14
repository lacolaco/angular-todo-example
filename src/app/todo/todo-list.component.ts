import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.list().subscribe(list => this.todoList = list);
  }

  updateTodo(todo: Todo) {
    this.todoService.update(todo.id, todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.delete(todo.id);
  }
}
