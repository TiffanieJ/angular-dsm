import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AccordionsComponent } from '../app/components/accordions/accordions.component';

export default {
  title: 'Accordions',
  component: AccordionsComponent,
};

export const Accordions = () => ({
  component: AccordionsComponent,
  props: {
    text: 'Hello Accordion',
  },
});
