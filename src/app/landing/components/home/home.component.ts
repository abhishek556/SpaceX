import { Component, OnInit } from '@angular/core';
import { LoadSpaceXService } from '../../services/load-spacex.service'
import { FlightInfo } from '../../models/flight-info';
import {isLandLoaded} from '../../store/home.selectors';
import { Store } from '@ngrx/store';
import { LandingState } from '../../reducers';
import { launchSuccess } from '../../store/landing.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spaceXData: FlightInfo[] = [];
  selectedYear:number;
  successfulLaunch:boolean =true;
  successfulLand:boolean = false;
  limit:number = 20;
  constructor(private loadSpaceXService: LoadSpaceXService) { }

  ngOnInit(): void {
    this.spaceXData = [];    
    this.loadSpaceXService.getLaunchSuccess( this.limit, this.successfulLaunch).subscribe(result => 
      this.spaceXData = result);
  }

  limitChanged(lt:number):void {
    this.limit = lt;
    this.loadSpaceXService.getLaunchSuccess( this.limit, this.successfulLaunch).subscribe(result => 
      this.spaceXData = result);
  }
  year(yr:number):void {
    this.spaceXData = [];
    this.selectedYear = yr;
    this.loadSpaceXService.getYearAll( this.limit, this.successfulLaunch,this.successfulLand,this.selectedYear).subscribe(result => 
      this.spaceXData = result);
  }
  launch(lc:boolean):void {
    this.spaceXData = [];
    this.successfulLaunch = lc;
    this.loadSpaceXService.getLaunchSuccess( this.limit, this.successfulLaunch).subscribe(result => 
      this.spaceXData = result);
  }
  land(ld:boolean):void {
    this.spaceXData = [];
    this.successfulLand = ld;
    this.loadSpaceXService.getLaunchLand( this.limit, this.successfulLaunch,this.successfulLand).subscribe(result => 
      this.spaceXData = result);
  }
}
