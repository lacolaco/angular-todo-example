import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Todo } from './shared/models/todo';

export interface AppStoreSnapshot {
    todo?: {
        [id: number]: Todo,
    };
}

@Injectable()
export class AppStore extends BehaviorSubject<AppStoreSnapshot> {

    private _snapshot: AppStoreSnapshot;

    get snapshot() {
        return this._snapshot;
    }

    constructor() {
        super({
            todo: {},
        });
        this.subscribe(snapshot => {
            this._snapshot = snapshot;
        });
    }

    patchValue(value: AppStoreSnapshot) {
        const snapshot = Object.assign({}, this._snapshot, value);
        this.next(snapshot);
    }
}
