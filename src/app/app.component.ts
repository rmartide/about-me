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
}
