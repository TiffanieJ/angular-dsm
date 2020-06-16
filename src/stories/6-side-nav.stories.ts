import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import { SideNavComponent } from '../app/components/side-nav/side-nav.component';

export default {
  title: 'SideNav',
  component: SideNavComponent,
  decorators: [withKnobs],
};

export const SideNav = () => ({
  component: SideNavComponent,
  props: {
    text:
      '<div class="grid-row grid-gap"><div class="tablet:grid-col-4">\n' +
      '  <h6 class="usa-heading-alt">Single level</h6><nav aria-label="Secondary navigation">\n' +
      '  <ul class="usa-sidenav">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="" class="usa-current">Current page</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Parent link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Parent link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '</nav>\n' +
      '</div><div class="tablet:grid-col-4">\n' +
      '  <h6 class="usa-heading-alt">Two levels</h6><nav aria-label="Secondary navigation">\n' +
      '  <ul class="usa-sidenav">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="">Parent link</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="" class="usa-current">Current page</a><ul class="usa-sidenav__sublist">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="">Child link</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="" class="usa-current">Child link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Parent link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '</nav>\n' +
      '</div><div class="tablet:grid-col-4">\n' +
      '  <h6 class="usa-heading-alt">Three levels</h6><nav aria-label="Secondary navigation">\n' +
      '  <ul class="usa-sidenav">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="">Parent link</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="" class="usa-current">Current page</a><ul class="usa-sidenav__sublist">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="">Child link</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a><ul class="usa-sidenav__sublist">\n' +
      '    <li class="usa-sidenav__item">\n' +
      '      <a href="">Grandchild link</a>\n' +
      '    </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Grandchild link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="" class="usa-current">Grandchild link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Child link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '  </li><li class="usa-sidenav__item">\n' +
      '    <a href="">Parent link</a>\n' +
      '  </li>\n' +
      '  </ul>\n' +
      '</nav>\n' +
      '</div></div>\n',
  },
});
