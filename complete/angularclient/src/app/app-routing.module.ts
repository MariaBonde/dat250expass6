import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos/todos.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'addTodos', component: TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
