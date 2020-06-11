import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FootersComponent } from '../app/components/footers/footers.component';

export default {
  title: 'Footers',
  component: FootersComponent,
};

export const Footers = () => ({
  component: FootersComponent,
  props: {
    text: 'Hello Footers',
  },
});
