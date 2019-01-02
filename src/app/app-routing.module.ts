import { CountMainComponent } from './count-main/count-main.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos/todos.component';
import { LoginComponent } from './login/login.component';
import { RouteSectionComponent } from './routes-section/route-section/route-section.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'todo', component: TodosComponent},
  {path: 'count', component: CountMainComponent},
  {path: 'route-section', component: RouteSectionComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
