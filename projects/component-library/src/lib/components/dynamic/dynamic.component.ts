import {
  Component, OnInit, ViewEncapsulation,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  ViewContainerRef, ViewChild,
  Injector,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'mjv-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
  ) { }

  ngOnInit(): void {

  }

  addComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(PureComponentComponent);
    const componentRef = factory.create(this.injector);
    const instance = componentRef.instance;
    instance.open = Math.random() >= 0.5;
    instance.count = Math.floor(Math.random() * 1000);
    this.container.insert(componentRef.hostView);
    // this.container.createComponent(factory, undefined, this.injector);
    // this.viewContainerRef.insert(componentRef.hostView);
    // this.viewContainerRef.createComponent(factory, undefined, this.injector);
  }

  removeComponent() {
    this.container.remove();
  }

}
