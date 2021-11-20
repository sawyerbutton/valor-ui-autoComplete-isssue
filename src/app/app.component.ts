import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value = 'Angular';
  index = 0;
  clickCount = 0;
  click$: Observable<string>;

  constructor(private host: ElementRef) {}
  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(
      mapTo(this.value),
      tap(() => {
        console.log('trigger');
        this.index++;
      })
    );
  }

  get element(): HTMLElement {
    return this.host.nativeElement;
  }

  clickCountPlus() {
    this.clickCount++;
  }
}
