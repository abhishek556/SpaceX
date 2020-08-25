import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FlightInfo } from '../../models/flight-info';
@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  flight:FlightInfo;
  constructor(@Inject(MAT_DIALOG_DATA) data) { 
    this.flight = data;
  }

  ngOnInit(): void {
  }

}
