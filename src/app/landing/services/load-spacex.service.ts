import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInfo } from '../models/flight-info';

@Injectable({
  providedIn: 'root'
})
export class LoadSpaceXService {

  private API_URL: string = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) { }

  getLaunchSuccess(limit: number, launchSuccess: boolean): Observable<FlightInfo[]> {
    return this.http.get<FlightInfo[]>(`${this.API_URL}?limit=${limit}&launch_success=${launchSuccess}`);
  }

  getLaunchLand(limit: number, launchSuccess: boolean, landSuccess: boolean): Observable<FlightInfo[]> {
    return this.http.get<FlightInfo[]>(`${this.API_URL}?limit=${limit}&launch_success=${launchSuccess}&land_success=${landSuccess}`);
  }

  getYearAll(limit: number, launchSuccess: boolean, landSuccess: boolean, launchYear: number): Observable<FlightInfo[]> {
    return this.http.get<FlightInfo[]>(`${this.API_URL}?limit=${limit}&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${launchYear}`);
  }

}

