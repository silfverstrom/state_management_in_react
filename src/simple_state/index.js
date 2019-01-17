import { BehaviorSubject, Subscription } from 'rxjs';

function Store(reducer, defaultData={}) {
    this.subject = new BehaviorSubject(defaultData);
    this.reducer = reducer;
}

Store.prototype.dispatcher = function(action) {
    const newState = this.reducer(this.getState(), action)
    this.subject.next(newState);
}
Store.prototype.getState = function() {
    return this.subject.value;
}
Store.prototype.subscribe = function(cb) {
    return this.subject.subscribe(cb);
}

export function createStore(reducer, defaultData) {
    const store = new Store(reducer, defaultData);
    return store;
}

