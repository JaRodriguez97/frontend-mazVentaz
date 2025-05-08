import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '@components/header/header.component';
import { HeroComponent } from '@components/hero/hero.component';
import { PitchComponent } from '@components/pitch/pitch.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    HeroComponent,
    PitchComponent,
  ],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
