import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

storiesOf('10- Mixins', module)
  .add('Likeable Post', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
        entityId: text('entityId', '1'),
        content: text('content', 'My Post content'),
        isLiked: boolean('isLiked', false),
        isClapped: boolean('isClapped', true),
        likes: number('likes', 100),
        claps: number('claps', 200),
        like: action('like'),
        unlike: action('unlike'),
        clap: action('clap'),
      },
      template: `
      <mjv-post
        [entityId]="entityId"
        [content]="content"
        [isLiked]="isLiked"
        [isClapped]="isClapped"
        [likes]="likes"
        [claps]="claps"
        (like)="like($event)"
        (unlike)="unlike($event)"
        (clap)="clap($event)"
      ></mjv-post>
    `,
    };
  });
