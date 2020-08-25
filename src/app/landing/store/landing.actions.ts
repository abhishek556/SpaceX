import { createAction, props } from '@ngrx/store';
import { FlightInfo } from '../models/flight-info'

export const loadAllFlights = createAction(
    "[Home Page] Load Home"
);

export const allFlightsLoaded = createAction(
    "[Home Page] All Flights Loaded",
    props<{space:FlightInfo[]}>()
);
export const launchSuccess = createAction(
    "[Home Page] All Flights Loaded",
    props<{limit:number,launchSuccess:boolean}>()
);
export const landSuccess = createAction(
    "[Home Page] All Flights Loaded",
    props<{limit:number,launchSuccess:boolean,landSuccess:boolean}>()
);
export const yearSelected = createAction(
    "[Home Page] All Flights Loaded",
    props<{limit:number,launchSuccess:boolean,landSuccess:boolean,year:number}>()
);
