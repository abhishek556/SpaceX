import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FlightInfo } from '../../models/flight-info';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input()
  spaceXData: FlightInfo[];
  spaceXPagData: any;
  color: ThemePalette = 'accent';
  checked = true;
  totalSize: number;
  pageSize = 8;
  limit = 20;
  @Output() limitNew = new EventEmitter<number>();
  
  pageSizeOptions: number[] = [8, 16, 32, 100];
  public currentPage = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageEvent:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onchange(changes.spaceXData.currentValue);

  }
  onchange(spaceXData:FlightInfo[]):void {
    this.spaceXPagData = new MatTableDataSource<FlightInfo>(spaceXData);
      this.spaceXPagData.paginator = this.paginator;
      
      this.totalSize = this.spaceXData.length;
      this.iterator();
  }
  private iterator():void {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.spaceXData.slice(start, end);
    this.spaceXPagData = part;
  }
  public handlePage(e: any):void {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

}
