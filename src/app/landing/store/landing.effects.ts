import { Injectable } from "@angular/core";

import { ofType, createEffect, Actions, Effect } from '@ngrx/effects'
import { LandingActions } from "./action-types";

import { LoadSpaceXService } from '../services/load-spacex.service';
import { map, concatMap } from 'rxjs/operators';
import { allFlightsLoaded } from "./landing.actions";

@Injectable()
export class LandingEffects {

    launchSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(LandingActions.launchSuccess),
            concatMap(action => this.searchService.getLaunchSuccess(action.limit, action.launchSuccess)),
            map(space =>
                allFlightsLoaded({ space }))
        ),{dispatch:false});
    landSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(LandingActions.landSuccess),
            concatMap(action => this.searchService.getLaunchLand(action.limit, action.launchSuccess, action.landSuccess)),
            map(space =>
                allFlightsLoaded({ space }))
        ),{dispatch:false});
    yearSelect$ = createEffect(
        () => this.actions$.pipe(
            ofType(LandingActions.yearSelected),
            concatMap(action => this.searchService.getYearAll(action.limit, action.launchSuccess, action.landSuccess, action.year)),
            map(space =>
                allFlightsLoaded({ space }))
        ),{dispatch:false});
    constructor(private actions$: Actions, private searchService: LoadSpaceXService) {
    }
}