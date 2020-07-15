import { Constructor } from './constructor.type';
import { EventEmitter, Output, Input } from '@angular/core';
import { HasEntityId } from './has-entity-id.type';

export interface Clappable {

  claps: number;

  isClapped: boolean;

  clap: EventEmitter<string>;
}

export type ClappableConstructor = Constructor<Clappable>;

export function mixinClappable<T extends Constructor<HasEntityId>>(base: T): ClappableConstructor & T {
  class BaseClappableClass extends base implements Clappable {

    @Input()
    isClapped: boolean;

    @Input()
    claps: number;

    @Output()
    clap = new EventEmitter<string>();

    constructor(...args: any[]) {
      super(...args);
    }

  }

  return BaseClappableClass;
}


