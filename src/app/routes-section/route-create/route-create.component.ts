import { Component, OnInit, Type } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/stores';
import { ADD_ROUTE, REMOVE_ROUTE } from '../actions';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
export class ir {
  constructor(
    public path: string,
    public component: string

  ) { }
}
@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.component.html',
  styleUrls: ['./route-create.component.css']
})
export class RouteCreateComponent {

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) { }
  ngOnInit() {
  

  }
  model = new ir('', '')
  @select(s => s.routing.routes) routes;

  post() {
    this.ngRedux.dispatch({ type: ADD_ROUTE, path: this.model.path, component: this.model.component })
    //this.router.config.unshift({path: 'myNewRoute', component: comp});
   
  }
  delete(index) {
    this.ngRedux.dispatch({ type: REMOVE_ROUTE, id: index })
  }


}
