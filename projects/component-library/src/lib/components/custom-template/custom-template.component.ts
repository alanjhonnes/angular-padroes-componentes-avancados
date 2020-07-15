import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

export interface TemplateContext {
  $implicit: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'mjv-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTemplateComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  template: TemplateRef<TemplateContext> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
