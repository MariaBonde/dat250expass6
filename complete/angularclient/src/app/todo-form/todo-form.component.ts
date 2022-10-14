import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TodoService} from "../todo.service";
import {Todo} from "../todo"


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent {

  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) {
    this.todo = new Todo();
  }

  onSubmit() {
    this.todoService.save(this.todo).subscribe(result => this.gotoTodoList());
  }

  gotoTodoList() {
    this.router.navigate(['/todos']);
  }
}
