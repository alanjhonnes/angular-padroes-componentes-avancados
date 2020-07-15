import { storiesOf } from '@storybook/angular';
import { ComponentsModule } from '../components.module';
import { text } from '@storybook/addon-knobs';

storiesOf('6- Custom template', module)
  .add('Basic', () => {
    return {
      moduleMetadata: {
        imports: [ComponentsModule],
      },
      props: {
        title: text('title', 'Meu título'),
        subtitle: text('subtitle', 'Meu subtítulo'),
      },
      template: `
      <mjv-custom-template
        [title]="title"
        [subtitle]="subtitle"
        [template]="customTemplate"
      >
      </mjv-custom-template>

      <ng-template #customTemplate
        let-default
        let-title="title"
        let-subtitle="subtitle">
        <h5>CUSTOM TEMPLATE</h5>

        <p style="color: blue">{{title}}</p>
        <p style="color: red">{{subtitle}}</p>
        <p style="color: green">{{default}}</p>
      </ng-template>
    `,
    };
  });
