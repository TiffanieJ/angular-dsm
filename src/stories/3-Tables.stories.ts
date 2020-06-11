import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TablesComponent } from '../app/components/tables/tables.component';

export default {
  title: 'Tables',
  component: TablesComponent,
};

export const Tables = () => ({
  component: TablesComponent,
  props: {
    text: 'Hello Tables',
  },
});
