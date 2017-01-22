import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  toggle() {
    this.todo.done = !this.todo.done;
    this.update.emit(this.todo);
  }

  onRemoveClick(e: Event) {
    e.stopPropagation();
    this.remove.emit(this.todo);
  }
}
