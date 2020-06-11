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
    text:
      '<h6 class="padding-bottom-2">Standard Layout</h6>\n' +
      '<ul class="usa-card-group">\n' +
      '  <li class="tablet:grid-col-4 usa-card">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Card</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '  <li class="tablet:grid-col-4 usa-card">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Card with media</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '  <li class="tablet:grid-col-4 usa-card usa-card--header-first">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Media and header first</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '  <li class="tablet:grid-col-4 usa-card usa-card--header-first">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Inset media</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media usa-card__media--inset">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '  <li class="tablet:grid-col-4 usa-card usa-card--header-first">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Exdent media</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media usa-card__media--exdent">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '</ul>\n' +
      '\n' +
      '<h6 class="padding-bottom-2">Flag Layout</h6>\n' +
      '<ul class="usa-card-group">\n' +
      '  <li class="tablet:grid-col-6 usa-card usa-card--flag">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Flag default</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '  <li class="tablet:grid-col-6 usa-card usa-card--flag usa-card--media-right">\n' +
      '    <div class="usa-card__container">\n' +
      '      <header class="usa-card__header">\n' +
      '        <h2 class="usa-card__heading">Flag media on right</h2>\n' +
      '      </header>\n' +
      '      <div class="usa-card__media">\n' +
      '        <div class="usa-card__img">\n' +
      '          <img src="https://images.unsplash.com/photo-1579800070193-abe62433f737?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=610&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A placeholder image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '\n' +
      '      <div class="usa-card__body">\n' +
      '        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n' +
      '      </div>\n' +
      '      <div class="usa-card__footer">\n' +
      '        <button class="usa-button">Visit Florida Keys</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '</ul>\n',
  },
});
