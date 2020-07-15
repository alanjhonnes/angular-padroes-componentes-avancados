import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mjv-content-trigger',
  templateUrl: './content-trigger.component.html',
  styleUrls: ['./content-trigger.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTriggerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  triggerSomeEvent(data: any) {
    console.log('triggered: ', data);
  }

}
