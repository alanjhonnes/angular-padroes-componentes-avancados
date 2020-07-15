import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';

storiesOf('4- NgContentSelect', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
      },
      template: `
      <mjv-ng-content-select>
        <div top-left>TOP LEFT</div>
        <div top-right>TOP RIGHT</div>
        <div bottom-left>BOTTOM LEFT</div>
        <mjv-pure-component bottom-right></mjv-pure-component>
      </mjv-ng-content-select>
    `,
    };
  });
