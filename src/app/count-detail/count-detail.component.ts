import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../stores';

@Component({
  selector: 'app-count-detail',
  templateUrl: './count-detail.component.html',
  styleUrls: ['./count-detail.component.css']
})
export class CountDetailComponent implements OnInit {
  @select() counter  
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
     
  }

}
