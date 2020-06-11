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
    text:
      '<h6>Default</h6>\n' +
      '<button class="usa-button ">Default</button>\n' +
      '<button class="usa-button  usa-button--hover">Hover</button>\n' +
      '<button class="usa-button  usa-button--active">Active</button>\n' +
      '<button class="usa-button  usa-focus">Focus</button>\n' +
      '<button class="usa-button " disabled>Disabled</button><button class="usa-button  usa-button--unstyled">Unstyled button</button>\n' +
      '<h6>Secondary color</h6>\n' +
      '<button class="usa-button usa-button--secondary">Default</button>\n' +
      '<button class="usa-button usa-button--secondary usa-button--hover">Hover</button>\n' +
      '<button class="usa-button usa-button--secondary usa-button--active">Active</button>\n' +
      '<button class="usa-button usa-button--secondary usa-focus">Focus</button>\n' +
      '<button class="usa-button usa-button--secondary" disabled>Disabled</button><button class="usa-button usa-button--secondary usa-button--unstyled">Unstyled button</button>\n' +
      '<h6>Accent cool color</h6>\n' +
      '<button class="usa-button usa-button--accent-cool">Default</button>\n' +
      '<button class="usa-button usa-button--accent-cool usa-button--hover">Hover</button>\n' +
      '<button class="usa-button usa-button--accent-cool usa-button--active">Active</button>\n' +
      '<button class="usa-button usa-button--accent-cool usa-focus">Focus</button>\n' +
      '<button class="usa-button usa-button--accent-cool" disabled>Disabled</button><button class="usa-button usa-button--accent-cool usa-button--unstyled">Unstyled button</button>\n' +
      '<h6>Base color</h6>\n' +
      '<button class="usa-button usa-button--base">Default</button>\n' +
      '<button class="usa-button usa-button--base usa-button--hover">Hover</button>\n' +
      '<button class="usa-button usa-button--base usa-button--active">Active</button>\n' +
      '<button class="usa-button usa-button--base usa-focus">Focus</button>\n' +
      '<button class="usa-button usa-button--base" disabled>Disabled</button><button class="usa-button usa-button--base usa-button--unstyled">Unstyled button</button>\n' +
      '<h6>Outline</h6>\n' +
      '<button class="usa-button usa-button--outline">Default</button>\n' +
      '<button class="usa-button usa-button--outline usa-button--hover">Hover</button>\n' +
      '<button class="usa-button usa-button--outline usa-button--active">Active</button>\n' +
      '<button class="usa-button usa-button--outline usa-focus">Focus</button>\n' +
      '<button class="usa-button usa-button--outline" disabled>Disabled</button><button class="usa-button usa-button--outline usa-button--unstyled">Unstyled button</button>\n' +
      '<h6>Outline inverse</h6>\n' +
      '<div class="bg-base-darkest padding-1" style="max-width: fit-content">\n' +
      '  <button class="usa-button usa-button--outline usa-button--inverse">Default</button>\n' +
      '  <button class="usa-button usa-button--outline usa-button--inverse usa-button--hover">Hover</button>\n' +
      '  <button class="usa-button usa-button--outline usa-button--inverse usa-button--active">Active</button>\n' +
      '  <button class="usa-button usa-button--outline usa-button--inverse usa-focus">Focus</button>\n' +
      '  <button class="usa-button usa-button--outline usa-button--inverse" disabled>Disabled</button><button class="usa-button usa-button--outline usa-button--inverse usa-button--unstyled">Unstyled button</button>\n' +
      '</div>\n' +
      '<h6>Big button</h6>\n' +
      '<button class="usa-button usa-button--big">Default</button>\n' +
      '<button class="usa-button usa-button--big usa-button--unstyled">Unstyled button</button>\n',
  },
});







