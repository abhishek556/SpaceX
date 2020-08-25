import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule } from '@angular/forms';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { StoreModule } from '@ngrx/store';
import * as fromLanding from './reducers';

import { EffectsModule } from '@ngrx/effects';
import { LandingEffects } from '../landing/store/landing.effects';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    InfoCardComponent, 
    DashboardComponent, 
    SidepanelComponent, 
    FooterComponent, 
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  entryComponents:[MoreInfoComponent]
})
export class LandingModule { }
