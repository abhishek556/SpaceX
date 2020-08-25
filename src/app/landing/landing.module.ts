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

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    InfoCardComponent, 
    DashboardComponent, 
    SidepanelComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LandingModule { }
