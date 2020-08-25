import { Component, OnInit, Input } from '@angular/core';
import { FlightInfo } from '../../models/flight-info';


@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input()
  flight:FlightInfo;
  @Input()
  checked:boolean = false;
  constructor() { }

  ngOnInit(): void {
   
  }

  
}
