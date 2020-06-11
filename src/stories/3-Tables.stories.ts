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
    text:
      '<table class="usa-table">\n' +
      '  <caption>Bordered table</caption>\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Document title</th>\n' +
      '    <th scope="col">Description</th>\n' +
      '    <th scope="col">Year</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '  <tr>\n' +
      '    <th scope="row">Declaration of Independence</th>\n' +
      '    <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>\n' +
      '    <td>1776</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Bill of Rights</th>\n' +
      '    <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>\n' +
      '    <td>1791</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Declaration of Sentiments</th>\n' +
      '    <td>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>\n' +
      '    <td>1848</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Emancipation Proclamation</th>\n' +
      '    <td>An executive order granting freedom to slaves in designated southern states.</td>\n' +
      '    <td>1863</td>\n' +
      '  </tr>\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '<table class="usa-table usa-table--borderless">\n' +
      '  <caption>Borderless table: A borderless table can be useful when you want the information to feel more a part of the text it accompanies and extends.</caption>\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Document Title</th>\n' +
      '    <th scope="col">Description</th>\n' +
      '    <th scope="col">Year</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '  <tr>\n' +
      '    <th scope="row">Declaration of Independence</th>\n' +
      '    <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>\n' +
      '    <td>1776</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Bill of Rights</th>\n' +
      '    <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>\n' +
      '    <td>1791</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Declaration of Sentiments</th>\n' +
      '    <td>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>\n' +
      '    <td>1848</td>\n' +
      '  </tr>\n' +
      '  <tr>\n' +
      '    <th scope="row">Emancipation Proclamation</th>\n' +
      '    <td>An executive order granting freedom to slaves in designated southern states.</td>\n' +
      '    <td>1863</td>\n' +
      '  </tr>\n' +
      '  </tbody>\n' +
      '</table>\n',
  },
});
