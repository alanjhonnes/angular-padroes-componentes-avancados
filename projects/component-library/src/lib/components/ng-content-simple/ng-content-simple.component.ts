import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mjv-ng-content-simple',
  template: `
  <div>ng-content-simple works!</div>
  <ng-content></ng-content>
  `,
  styleUrls: ['./ng-content-simple.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
