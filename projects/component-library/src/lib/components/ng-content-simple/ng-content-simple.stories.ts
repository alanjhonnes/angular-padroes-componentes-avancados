import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';

storiesOf('3- NgContentSimple', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
      },
      template: `
      <mjv-ng-content-simple>
        <h1>My content</h1>
        <mjv-pure-component></mjv-pure-component>
      </mjv-ng-content-simple>
    `,
    };
  });
