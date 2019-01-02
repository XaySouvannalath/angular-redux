import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/stores';
import { ADD_TODO } from '../actions';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent {
  @select(s => s.tasking.todos) todos
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  post(task, status){
     this.ngRedux.dispatch({type: ADD_TODO, task: task, done: status})
  }

}
