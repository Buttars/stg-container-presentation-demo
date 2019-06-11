import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todosService: TodosService) {
    this.todosService.todos$.subscribe(todos => (this.todos = todos));
  }

  ngOnInit() {}

  add = (todo: Todo) => {
    this.todosService.add(todo);
  };

  remove = (index: number) => {
    this.todosService.remove(index);
  };
}
