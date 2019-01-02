import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../stores';
import {Map } from 'immutable'
@Component({
  selector: 'app-count-main',
  templateUrl: './count-main.component.html',
  styleUrls: ['./count-main.component.css']
})
export class CountMainComponent implements OnInit {
  @select(s=>s.get('counter ')) counter
  constructor(private ngRedux: NgRedux<Map<string, any>>) { }

  ngOnInit() {
  }

}
