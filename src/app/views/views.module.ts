import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { BiographyComponent } from './biography/biography.component';
import { StackComponent } from './stack/stack.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, SkillsComponent, BiographyComponent, StackComponent, CvComponent, ProjectsComponent, HobbiesComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
