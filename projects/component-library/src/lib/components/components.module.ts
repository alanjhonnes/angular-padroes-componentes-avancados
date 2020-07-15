import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureComponentComponent } from './pure-component/pure-component.component';
import { NgContentSimpleComponent } from './ng-content-simple/ng-content-simple.component';
import { NgContentSelectComponent } from './ng-content-select/ng-content-select.component';
import { ContentTriggerComponent } from './content-trigger/content-trigger.component';
import { ContentTriggerDirective } from './content-trigger/content-trigger.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { PostComponent } from './post/post.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';

const components = [
  PureComponentComponent,
  NgContentSimpleComponent,
  NgContentSelectComponent,
  ContentTriggerComponent,
  DynamicComponent,
  RecursiveComponent,
  PostComponent,
  CustomTemplateComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...components,
    ContentTriggerDirective,
  ],
  exports: [
    ...components,
    ContentTriggerDirective,
  ],
  entryComponents: [
    ...components,
  ],
})
export class ComponentsModule { }
