import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/Todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: Todo[] = [];
  x!: number;
  constructor( private calcul :CalculService) { }

  ngOnInit(): void {
    this.todolist=[
    {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
    {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
    {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true }
    ];
  }

  getNumber() {
    this.x=this.calcul.getNumberOf(this.todolist,"completed",false);
  }

  Bilan() {
    this.x = 0;
    for (let i = 0; i < this.todolist.length; i++){
      if (this.todolist[i].completed === false)
        this.x++;
   }
  }

}
