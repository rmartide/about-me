import { Component } from '@angular/core';

@Component({
  selector: 'abm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'about-me';
  folders = [
    {name: 'folder1', updated: 'Update yesterday'},
    {name: 'folder2', updated: 'Update 2018'},
    {name: 'folder3', updated: 'Update 3 days ago'},
  ]

  notes = [
    {name: 'note1', updated: 'Update yesterday'},
    {name: 'note2', updated: 'Update 2018'},
    {name: 'note3', updated: 'Update 3 days ago'},
  ]

  // This will need to come from i18e
  sections = [
    { id: 'home', display: 'Home'},
    { id: 'bio', display: 'Biography'},
    { id: 'skills', display: 'Skills'},
    { id: 'stack', display: 'Stack'},
    { id: 'projects', display: 'Projects'},
    { id: 'hobbies', display: 'Hobbies'},
    { id: 'cv', display: 'Curriculum Vitae'},
    { id: 'contact', display: 'Contact'},
  ]
}
