import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ComponentsModule } from '../components.module';

storiesOf('1 - Pure Component', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
        open: boolean('Open', false),
        buttonClicked: action('buttonClicked'),
      },
      template: `
      <mjv-pure-component [open]="open" (buttonClicked)="buttonClicked($event)"></mjv-pure-component>
    `,
    };
  });
