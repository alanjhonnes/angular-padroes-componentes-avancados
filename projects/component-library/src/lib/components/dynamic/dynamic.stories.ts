import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';

storiesOf('9- Dynamic Components', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
      },
      template: `
      <div>DYNAMIC COMPONENTS</div>
      <mjv-dynamic>
      </mjv-dynamic>
    `,
    };
  });
