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
    text:
      '<h6 class="usa-heading-alt" id="big-footer">Big footer</h6>\n' +
      '\n' +
      '<footer class="usa-footer usa-footer--big">\n' +
      '  <div class="grid-container usa-footer__return-to-top">\n' +
      '    <a href="#">Return to top</a>\n' +
      '  </div>\n' +
      '  <div class="usa-footer__primary-section">\n' +
      '    <div class="grid-container">\n' +
      '      <div class="grid-row grid-gap">\n' +
      '        <div class="tablet:grid-col-8">\n' +
      '          <nav class="usa-footer__nav" aria-label="Footer navigation">\n' +
      '            <div class="grid-row grid-gap-4">\n' +
      '              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">\n' +
      '                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n' +
      '                  <h4 class="usa-footer__primary-link">Topic</h4>\n' +
      '                  <ul class="usa-list usa-list--unstyled">\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link that\'s a bit longer than most of the others</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                  </ul>\n' +
      '                </section>\n' +
      '              </div>\n' +
      '              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">\n' +
      '                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n' +
      '                  <h4 class="usa-footer__primary-link">Topic</h4>\n' +
      '                  <ul class="usa-list usa-list--unstyled">\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link that\'s pretty long</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                  </ul>\n' +
      '                </section>\n' +
      '              </div>\n' +
      '              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">\n' +
      '                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n' +
      '                  <h4 class="usa-footer__primary-link">Topic</h4>\n' +
      '                  <ul class="usa-list usa-list--unstyled">\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                  </ul>\n' +
      '                </section>\n' +
      '              </div>\n' +
      '              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">\n' +
      '                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n' +
      '                  <h4 class="usa-footer__primary-link">Topic</h4>\n' +
      '                  <ul class="usa-list usa-list--unstyled">\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                    <li class="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>\n' +
      '                  </ul>\n' +
      '                </section>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </nav>\n' +
      '        </div>\n' +
      '        <div class="tablet:grid-col-4">\n' +
      '          <div class="usa-sign-up">\n' +
      '            <h3 class="usa-sign-up__heading">Sign up</h3>\n' +
      '            <form class="usa-form">\n' +
      '              <label class="usa-label" for="email" id="">Your email address</label>\n' +
      '              <input class="usa-input" id="email" name="email" type="email">\n' +
      '              <button class="usa-button" type="submit">Sign up</button>\n' +
      '            </form>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  <div class="usa-footer__secondary-section">\n' +
      '    <div class="grid-container">\n' +
      '      <div class="grid-row grid-gap">\n' +
      '        <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">\n' +
      '          <div class="mobile-lg:grid-col-auto">\n' +
      '            <img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="">\n' +
      '          </div>\n' +
      '          <div class="mobile-lg:grid-col-auto">\n' +
      '            <h3 class="usa-footer__logo-heading">Name of Agency</h3>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="usa-footer__contact-links mobile-lg:grid-col-6">\n' +
      '          <div class="usa-footer__social-links grid-row grid-gap-1">\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--facebook" href="javascript:void(0);">\n' +
      '                <span>Facebook</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--twitter" href="javascript:void(0);">\n' +
      '                <span>Twitter</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--youtube" href="javascript:void(0);">\n' +
      '                <span>YouTube</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--rss" href="javascript:void(0);">\n' +
      '                <span>RSS</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <h3 class="usa-footer__contact-heading">Agency Contact Center</h3>\n' +
      '          <address class="usa-footer__address">\n' +
      '            <div class="usa-footer__contact-info grid-row grid-gap">\n' +
      '              <div class="grid-col-auto">\n' +
      '                <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>\n' +
      '              </div>\n' +
      '              <div class="grid-col-auto">\n' +
      '                <a href="mailto:info@agency.gov">info@agency.gov</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </address>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</footer>\n' +
      '\n' +
      '<h6 class="usa-heading-alt" id="medium-footer">Medium footer</h6>\n' +
      '\n' +
      '<footer class="usa-footer">\n' +
      '  <div class="grid-container usa-footer__return-to-top">\n' +
      '    <a href="#">Return to top</a>\n' +
      '  </div>\n' +
      '  <div class="usa-footer__primary-section">\n' +
      '    <nav class="usa-footer__nav" aria-label="Footer navigation">\n' +
      '      <ul class="grid-row grid-gap">\n' +
      '        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '          <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '        </li>\n' +
      '        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '          <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '        </li>\n' +
      '        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '          <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '        </li>\n' +
      '        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '          <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '        </li>\n' +
      '        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '          <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '    </nav>\n' +
      '  </div>\n' +
      '\n' +
      '  <div class="usa-footer__secondary-section">\n' +
      '    <div class="grid-container">\n' +
      '      <div class="grid-row grid-gap">\n' +
      '        <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">\n' +
      '          <div class="mobile-lg:grid-col-auto">\n' +
      '            <img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="">\n' +
      '          </div>\n' +
      '          <div class="mobile-lg:grid-col-auto">\n' +
      '            <h3 class="usa-footer__logo-heading">Name of Agency</h3>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="usa-footer__contact-links mobile-lg:grid-col-6">\n' +
      '          <div class="usa-footer__social-links grid-row grid-gap-1">\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--facebook" href="javascript:void(0);">\n' +
      '                <span>Facebook</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--twitter" href="javascript:void(0);">\n' +
      '                <span>Twitter</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--youtube" href="javascript:void(0);">\n' +
      '                <span>YouTube</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto">\n' +
      '              <a class="usa-social-link usa-social-link--rss" href="javascript:void(0);">\n' +
      '                <span>RSS</span>\n' +
      '              </a>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <h3 class="usa-footer__contact-heading">Agency Contact Center</h3>\n' +
      '          <address class="usa-footer__address">\n' +
      '            <div class="usa-footer__contact-info grid-row grid-gap">\n' +
      '              <div class="grid-col-auto">\n' +
      '                <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>\n' +
      '              </div>\n' +
      '              <div class="grid-col-auto">\n' +
      '                <a href="mailto:info@agency.gov">info@agency.gov</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </address>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</footer>\n' +
      '\n' +
      '<h6 class="usa-heading-alt" id="slim-footer">Slim footer</h6>\n' +
      '\n' +
      '<footer class="usa-footer usa-footer--slim">\n' +
      '  <div class="grid-container usa-footer__return-to-top">\n' +
      '    <a href="#">Return to top</a>\n' +
      '  </div>\n' +
      '  <div class="usa-footer__primary-section">\n' +
      '    <div class="usa-footer__primary-container grid-row">\n' +
      '      <div class="mobile-lg:grid-col-8">\n' +
      '        <nav class="usa-footer__nav" aria-label="Footer navigation">\n' +
      '          <ul class="grid-row grid-gap">\n' +
      '            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '            </li>\n' +
      '            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '            </li>\n' +
      '            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '            </li>\n' +
      '            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">\n' +
      '              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>\n' +
      '            </li>\n' +
      '          </ul>\n' +
      '        </nav>\n' +
      '      </div>\n' +
      '      <div class="mobile-lg:grid-col-4">\n' +
      '        <address class="usa-footer__address">\n' +
      '          <div class="grid-row grid-gap">\n' +
      '            <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">\n' +
      '              <div class="usa-footer__contact-info">\n' +
      '                <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">\n' +
      '              <div class="usa-footer__contact-info">\n' +
      '                <a href="mailto:info@agency.gov">info@agency.gov</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </address>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  <div class="usa-footer__secondary-section">\n' +
      '    <div class="grid-container">\n' +
      '      <div class="usa-footer__logo grid-row grid-gap-2">\n' +
      '        <div class="grid-col-auto">\n' +
      '          <img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="">\n' +
      '        </div>\n' +
      '        <div class="grid-col-auto">\n' +
      '          <h3 class="usa-footer__logo-heading">Name of Agency</h3>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</footer>\n',
  },
});
