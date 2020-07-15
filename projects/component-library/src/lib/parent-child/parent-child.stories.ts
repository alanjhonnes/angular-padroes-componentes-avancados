import { storiesOf } from '@storybook/angular';
import { ParentChildModule } from './parent-child.module';

storiesOf('2- Parent-Child', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ParentChildModule],
      },
      props: {
      },
      template: `
      <mjv-parent>
      </mjv-parent>
    `,
    };
  });
