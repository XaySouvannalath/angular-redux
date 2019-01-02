import { PUT_COUNTER } from './../actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../stores';

@Component({
  selector: 'app-count-edit',
  templateUrl: './count-edit.component.html',
  styleUrls: ['./count-edit.component.css']
})
export class CountEditComponent implements OnInit {
  @select() counter
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

  }
  put(value){
   this.ngRedux.dispatch({ type: PUT_COUNTER})
    
  }

}
