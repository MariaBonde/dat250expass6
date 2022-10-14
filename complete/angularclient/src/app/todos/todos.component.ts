import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos = new Array<Todo>;


  constructor(private todoService: TodoService) {
  }

  delete(id: string) {
    this.todoService.delete(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.todoService.findAll();
      }
    )
  }


  ngOnInit(): void {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    })
  }

}
