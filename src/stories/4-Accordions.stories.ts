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
    text:
      '<h6>Borderless</h6>\n' +
      '\n' +
      '<div class="usa-accordion">\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="true"\n' +
      '            aria-controls="a1">\n' +
      '      First Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="a1" class="usa-accordion__content usa-prose">\n' +
      '    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="a2">\n' +
      '      Second Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="a2" class="usa-accordion__content usa-prose">\n' +
      '    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p> <ul><li>This is a list item</li><li>Another list item</li></ul>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="a3">\n' +
      '      Third Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="a3" class="usa-accordion__content usa-prose">\n' +
      '    <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="a4">\n' +
      '      Fourth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="a4" class="usa-accordion__content usa-prose">\n' +
      '    <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="a5">\n' +
      '      Fifth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="a5" class="usa-accordion__content usa-prose">\n' +
      '    <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '</div>\n' +
      '\n' +
      '<h6>Bordered</h6>\n' +
      '\n' +
      '<div class="usa-accordion usa-accordion--bordered">\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="true"\n' +
      '            aria-controls="b-a1">\n' +
      '      First Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="b-a1" class="usa-accordion__content usa-prose">\n' +
      '    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="b-a2">\n' +
      '      Second Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="b-a2" class="usa-accordion__content usa-prose">\n' +
      '    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p> <ul><li>This is a list item</li><li>Another list item</li></ul>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="b-a3">\n' +
      '      Third Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="b-a3" class="usa-accordion__content usa-prose">\n' +
      '    <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="b-a4">\n' +
      '      Fourth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="b-a4" class="usa-accordion__content usa-prose">\n' +
      '    <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="b-a5">\n' +
      '      Fifth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="b-a5" class="usa-accordion__content usa-prose">\n' +
      '    <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '</div>\n' +
      '\n' +
      '<h6>Multiselectable</h6>\n' +
      '\n' +
      '<div class="usa-accordion" aria-multiselectable="true">\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="true"\n' +
      '            aria-controls="m-a1">\n' +
      '      First Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="m-a1" class="usa-accordion__content usa-prose">\n' +
      '    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="m-a2">\n' +
      '      Second Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="m-a2" class="usa-accordion__content usa-prose">\n' +
      '    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p> <ul><li>This is a list item</li><li>Another list item</li></ul>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="m-a3">\n' +
      '      Third Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="m-a3" class="usa-accordion__content usa-prose">\n' +
      '    <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="m-a4">\n' +
      '      Fourth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="m-a4" class="usa-accordion__content usa-prose">\n' +
      '    <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '  <!-- Use the accurate heading level to maintain the document outline -->\n' +
      '  <h2 class="usa-accordion__heading">\n' +
      '    <button class="usa-accordion__button"\n' +
      '            aria-expanded="false"\n' +
      '            aria-controls="m-a5">\n' +
      '      Fifth Amendment\n' +
      '    </button>\n' +
      '  </h2>\n' +
      '  <div id="m-a5" class="usa-accordion__content usa-prose">\n' +
      '    <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</p>\n' +
      '\n' +
      '  </div>\n' +
      '\n' +
      '</div>\n',
  },
});
