import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { CardsComponent } from '../app/components/cards/cards.component';

export default {
  title: 'Cards',
  component: CardsComponent,
};

export const Cards = () => ({
  component: CardsComponent,
  props: {
    text: 'foo foo foo',
  },
});
