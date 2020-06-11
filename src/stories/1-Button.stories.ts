import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AppComponent } from '../app/app.component';
import { ButtonsComponent } from '../app/components/buttons/buttons.component';

export default {
  title: 'Button',
  component: ButtonsComponent,
};

export const Button = () => ({
  component: ButtonsComponent,
  props: {
    text: 'Hello Button',
  },
});







