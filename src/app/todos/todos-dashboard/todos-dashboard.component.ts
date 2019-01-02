import { IAppState } from './../../stores';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.css']
})
export class TodosDashboardComponent implements OnInit {
  @select(s => s.tasking.todos) todos
  constructor(private ngRedux: NgRedux<IAppState>) { }
  
  ngOnInit() {
  }

}
