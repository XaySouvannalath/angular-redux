import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './stores';
import { INCREMENT } from './actions';
import { Map } from 'immutable'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngRedux: NgRedux<Map<string, any>>){
   
  }
  title = 'ng-redux';
  counter = 0;
  increment(){
    // this.counter = this.counter + 1
    this.ngRedux.dispatch({type: INCREMENT})
  }
}
