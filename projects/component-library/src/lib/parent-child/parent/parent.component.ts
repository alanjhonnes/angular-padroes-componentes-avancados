import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mjv-parent',
  template: `
  <p>parent works!</p>

<mjv-child></mjv-child>
  `,
  styleUrls: ['./parent.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  methodToBeCalledByChild() {
    console.log('parent called');
  }


}
