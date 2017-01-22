import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../../app.store';
import { Todo } from '../models/todo';

@Injectable()
export class TodoStore {

    get list(): Observable<Todo[]> {
        return this.appStore.map(appStore => {
            return Object.keys(appStore.todo).map(id => appStore.todo[id])
            .filter(todo => !!todo)
            .sort((a, b) => b.id - a.id);
        });
    }

    constructor(private appStore: AppStore) {
        this.mockSetup();
    }

    private mockSetup() {
        [
            new Todo('Finish this'),
            new Todo('Remove this', true),
            new Todo('Create new todo'),
        ].forEach(todo => this.insert(todo));
    }

    get(id: number): Observable<Todo> {
        return this.appStore.map(appStore => appStore.todo[id]);
    }

    insert(todo: Todo): void {
        const store = this.appStore.snapshot;
        todo.id = Object.keys(store.todo).length;
        store.todo[todo.id] = todo;
        this.appStore.patchValue(store);
    }

    update(id: number, todo: Todo): void {
        const store = this.appStore.snapshot;
        store.todo[todo.id] = todo;
        this.appStore.patchValue(store);
    }

    delete(id: number): void {
        const store = this.appStore.snapshot;
        store.todo[id] = undefined;
        this.appStore.patchValue(store);
    }
}
