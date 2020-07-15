import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { mixinLikeable } from '../../mixins/likeable.mixin';
import { HasEntityId } from '../../mixins/has-entity-id.type';
import { mixinClappable } from '../../mixins/clappable.mixin';

class PostComponentBase implements HasEntityId {

  @Input()
  entityId: string;
}

const MixedBasePostComponent = mixinClappable(mixinLikeable(PostComponentBase));

@Component({
  selector: 'mjv-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent extends MixedBasePostComponent {

  @Input()
  content: string;

  constructor() {
    super();
  }

}
