import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IAppState, rootReducer, INITIAL_STATE} from './stores';
import { CountDetailComponent } from './count-detail/count-detail.component';
import { CountMainComponent } from './count-main/count-main.component';
import { CountMasterComponent } from './count-master/count-master.component';
import { CountEditComponent } from './count-edit/count-edit.component';
import { TodosComponent } from './todos/todos/todos.component';
import { TodosDashboardComponent } from './todos/todos-dashboard/todos-dashboard.component';
import { TodosInputComponent } from './todos/todos-input/todos-input.component';
import { TodosCreateComponent } from './todos/todos-create/todos-create.component';
import { LoginComponent } from './login/login.component';

import { fromJS, Map} from 'immutable';
import { RouteSectionComponent } from './routes-section/route-section/route-section.component';
import { RouteCreateComponent } from './routes-section/route-create/route-create.component';
import { RouteDashboardComponent } from './routes-section/route-dashboard/route-dashboard.component';
import { PostsComponent } from './posts/posts/posts.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    CountDetailComponent,
    CountMainComponent,
    CountMasterComponent,
    CountEditComponent,
    TodosComponent,
    TodosDashboardComponent,
    TodosInputComponent,
    TodosCreateComponent,
    LoginComponent,
    RouteSectionComponent,
    RouteCreateComponent,
    RouteDashboardComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
 }
