import { Component, OnInit, Input } from '@angular/core';
import { FlightInfo } from '../../models/flight-info';
import { MatDialog } from '@angular/material/dialog';
import { noop } from 'rxjs';
import { MoreInfoComponent } from '../more-info/more-info.component';


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
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
   
  }

  moreInfo():void {
    const dialogRef = this.dialog.open(MoreInfoComponent, {
      width: '600px',
      height: '350px',
      data: this.flight
    });
    dialogRef.afterClosed().subscribe(result => {
      noop
    });
  }

  
}
