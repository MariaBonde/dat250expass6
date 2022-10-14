import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoURL: string;

  constructor(private http: HttpClient) {
    this.todoURL = 'http://localhost:8080/todos';
  }

  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoURL);
  }

  public save(todo: Todo) {
    return this.http.post<Todo>(this.todoURL, todo);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.todoURL}/${id}`)
  }

}
