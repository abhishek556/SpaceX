import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {

  years:number[] = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  selectedYear:number;
  successfulLaunch:boolean = true;
  successfulLand:boolean = false;

  
  @Output() yearSelected = new EventEmitter<number>();
  @Output() launchSuccess = new EventEmitter<boolean>();
  @Output() landSuccess = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
