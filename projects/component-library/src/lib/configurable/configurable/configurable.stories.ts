import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ConfigurableModule } from '../configurable.module';
import { CONFIG_TOKEN, ComponentConfig } from '../configuration.const';

storiesOf('7- Configurable Component', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ConfigurableModule],
        providers: [
          // {
          //   provide: CONFIG_TOKEN,
          //   useValue: {
          //     backgroundColor: 'blue',
          //     borderRadius: '40px',
          //     color: 'white',
          //   } as ComponentConfig,
          // },
        ],
      },
      props: {
      },
      template: `
      <mjv-configurable></mjv-configurable>
    `,
    };
  });
