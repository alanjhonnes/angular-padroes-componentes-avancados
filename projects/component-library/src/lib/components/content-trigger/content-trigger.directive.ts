import { OnInit, Directive, HostListener, Input } from '@angular/core';
import { ContentTriggerComponent } from './content-trigger.component';

@Directive({
  selector: '[mjv-content-trigger]',
})
export class ContentTriggerDirective implements OnInit {

  @Input()
  customData: any;


  @HostListener('click')
  onClick() {
    this.parent.triggerSomeEvent(this.customData);
  }

  constructor(private parent: ContentTriggerComponent) { }

  ngOnInit(): void {
  }

}
