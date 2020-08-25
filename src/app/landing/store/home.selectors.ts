import {createSelector, createFeatureSelector} from '@ngrx/store';
import {LandingState} from '../reducers/index'
export const selectLandingState = createFeatureSelector<LandingState>('home');


export const isLandLoaded = createSelector(
    selectLandingState,
    (state:LandingState) => state.space
);
