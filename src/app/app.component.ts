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
    { id: 'home', url:'', display: 'Home'},
    { id: 'bio', url:'biography', display: 'Biography'},
    { id: 'stack', url:'stack', display: 'Stack'},
    { id: 'skills', url:'skills', display: 'Skills'},
    { id: 'projects', url:'projects', display: 'Projects'},
    { id: 'contact', url:'contact', display: 'Contact'},
    { id: 'hobbies', url:'hobbies', display: 'Hobbies'},
    { id: 'cv', url:'cv', display: 'Curriculum Vitae'},
  ]
}
