import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';

storiesOf('5- Content Trigger Component', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
      },
      template: `
      <mjv-content-trigger>
        <button mjv-content-trigger [customData]="{ prop: 'some data' }"> MY CUSTOM BUTTON</button>
      </mjv-content-trigger>
    `,
    };
  });
