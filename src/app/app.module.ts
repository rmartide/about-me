import { ViewsModule } from './views';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { SectionStepperComponent } from './navigation/section-stepper/section-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SectionStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
