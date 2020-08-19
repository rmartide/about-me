import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  BiographyComponent,
  ContactComponent,
  HobbiesComponent,
  HomeComponent,
  ProjectsComponent,
  SkillsComponent,
  StackComponent,
  CvComponent
} from "./views";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "biography", component: BiographyComponent },
	{ path: "stack", component: StackComponent },
	{ path: "skills", component: SkillsComponent },
	{ path: "projects", component: ProjectsComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "hobbies", component: HobbiesComponent },
	{ path: "cv", component: CvComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
