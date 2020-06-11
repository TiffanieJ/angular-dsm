import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AppComponent } from '../app/app.component';

export default {
  title: 'Button',
  component: AppComponent,
};

export const Button = () => ({
  component: AppComponent,
  props: {
    text: 'Hello Button',
  },
});







