import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  constructor() {}

  add = (todo: Todo) => {
    const state = this.todos.getValue();
    state.push(todo);
    this.todos.next(state);
  };

  remove = (index: number) => {
    const state = this.todos.getValue();
    state.splice(index, 1);
    this.todos.next(state);
  };
}
