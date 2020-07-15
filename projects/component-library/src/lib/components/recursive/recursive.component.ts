import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Node {
  id: string;
  children: Node[];
}

@Component({
  selector: 'mjv-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecursiveComponent implements OnInit {

  @Input()
  node: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
