import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { FlightInfo } from '../models/flight-info';
import { LandingActions }from '../store/action-types'

export const landingFeatureKey = 'landing';

export interface LandingState {
  space:FlightInfo[]
}

export const initialLandingState: LandingState = {
  space: undefined
}


export const spaceReducer = createReducer(
  initialLandingState,
  on(LandingActions.loadAllFlights, (state, action) => {
    return {
      space: state.space
    }
  }),
  on(LandingActions.allFlightsLoaded, (state, action) => {
    return {
      space: action.space
    }
  }),
  on(LandingActions.launchSuccess, (state, action) => {
    return {
      space:state.space
    }
  }),
  on(LandingActions.landSuccess, (state, action) => {
    return {
      space:state.space
    }
  }),
  on(LandingActions.yearSelected, (state, action) => {
    return {
      space:state.space
    }
  })
);



