import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, filter, map} from "rxjs";

export interface Todo {
  completed: boolean;
  title: string;
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  todoPlayer = '';
  loading = false;

  constructor() {

  }

  ngOnInit() {}


  addPlayer() {
    if (!this.todoPlayer.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoPlayer,
      completed: false
    }
   }



}
