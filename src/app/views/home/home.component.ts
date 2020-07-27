import { AfterContentInit, Component, ElementRef, OnDestroy } from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterContentInit, OnDestroy {
  so: any;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    this.so = ScrollOut({
      targets: ".sticky-header",
      threshold: 0.5
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }

}
