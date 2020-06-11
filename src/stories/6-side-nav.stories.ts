import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SideNavComponent } from '../app/components/side-nav/side-nav.component';

export default {
  title: 'SideNav',
  component: SideNavComponent,
};

export const SideNav = () => ({
  component: SideNavComponent,
  props: {
    text: 'Hello SideNa',
  },
});
