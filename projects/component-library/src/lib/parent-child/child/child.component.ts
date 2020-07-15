import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Inject, forwardRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'mjv-child',
  template: `
<p>child works!</p>
<button (click)="callParentMethod()">Child button</button>
  `,
  styleUrls: ['./child.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  constructor(private parent: ParentComponent) { }

  ngOnInit(): void {
  }

  callParentMethod() {
    this.parent.methodToBeCalledByChild();
  }

  methodToBeCalledByParent() {
    console.log('child method called');
  }

}
