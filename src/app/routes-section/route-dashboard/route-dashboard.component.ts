import { CLEAR_ROUTE } from './../actions';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/stores';

@Component({
  selector: 'app-route-dashboard',
  templateUrl: './route-dashboard.component.html',
  styleUrls: ['./route-dashboard.component.css']
})
export class RouteDashboardComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }
  @select(s => s.routing.lastUpdate) lastUpdate;
  @select(s=>s.routing.routes) routes;
  ngOnInit() {
  }

    delete(){
      this.ngRedux.dispatch({type: CLEAR_ROUTE})
    }
}
