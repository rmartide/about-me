import { ViewsModule } from "./views";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SectionStepperComponent } from "./navigation/section-stepper/section-stepper.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavComponent } from "./navigation/sidenav/sidenav.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

@NgModule({
	declarations: [AppComponent, SectionStepperComponent, SidenavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ViewsModule,
		BrowserAnimationsModule,
		MatSidenavModule,
    MatDividerModule,
    MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
