import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

import { Todo } from './todo';

export type TodoAction = TodoInsertAction | TodoUpdateAction | TodoDeleteAction;

export class TodoInsertAction {
    constructor(public value: Todo) {
    }
}

export class TodoUpdateAction {
    constructor(public id: number, public value: Todo) {
    }
}

export class TodoDeleteAction {
    constructor(public id: number) {
    }
}

@Injectable()
export class TodoService {

    private action$ = new ReplaySubject<TodoAction>();

    private list$: Observable<Todo[]>;

    constructor() {
        this.action$.subscribe(action => {
            console.log(`[DEBUG]`, action);
        });
        this.list$ = this.action$.scan((list: Todo[], action: TodoAction) => {
            if (action instanceof TodoInsertAction) {
                action.value.id = list.length;
                return [action.value, ...list];
            } else if (action instanceof TodoUpdateAction) {
                return list.map(todo => todo.id === action.id ? action.value : todo);
            } else if (action instanceof TodoDeleteAction) {
                return list.filter(todo => todo.id !== action.id);
            } else {
                console.warn(`Unknown action: ${action}`);
                return list;
            }
        }, []);
        this.mockSetup();
    }

    private mockSetup() {
        [
            new Todo('Finish this'),
            new Todo('Remove this', true),
            new Todo('Create new todo'),
        ].forEach(todo => this.insert(todo));
    }

    /**
     * GET /todo
     */
    list(): Observable<Todo[]> {
        return this.list$.share();
    }

    /**
     * GET /todo/:id
     */
    get(id: number): Observable<Todo> {
        return this.list().map(list => list.filter(todo => todo.id === id)[0]);
    }

    /**
     * POST /todo 
     */
    insert(todo: Todo): void {
        this.action$.next(new TodoInsertAction(todo));
    }

    /**
     * PUT /todo/:id
     */
    update(id: number, todo: Todo): void {
        this.action$.next(new TodoUpdateAction(id, todo));
    }

    /**
     * DELETE /todo/:id
     */
    delete(id: number): void {
        this.action$.next(new TodoDeleteAction(id));
    }
}
