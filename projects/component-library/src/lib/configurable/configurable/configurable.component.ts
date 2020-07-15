import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Inject, HostBinding } from '@angular/core';
import { ComponentConfig, CONFIG_TOKEN } from '../configuration.const';

@Component({
  selector: 'mjv-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurableComponent implements OnInit {


  @HostBinding('style.color')
  color: string;

  @HostBinding('style.borderRadius')
  borderRadius: string;

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(@Inject(CONFIG_TOKEN) private config: ComponentConfig) {
    this.color = config.color;
    this.backgroundColor = config.backgroundColor;
    this.borderRadius = config.borderRadius;
  }

  ngOnInit(): void {
  }

}
