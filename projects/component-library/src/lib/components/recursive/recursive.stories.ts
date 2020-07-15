import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';
import { object } from '@storybook/addon-knobs';
import { Node } from './recursive.component';

const node: Node = {
  id: '1',
  children: [
    {
      id: '2',
      children: [
        {
          id: '3',
          children: [
            {
              id: '4',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      children: [
        {
          id: '6',
          children: [],
        },
      ],
    },
  ],
};

storiesOf('8- Recursive Components', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
        node: object('node', node),
      },
      template: `
      <mjv-recursive [node]="node">
      </mjv-recursive>
    `,
    };
  });
