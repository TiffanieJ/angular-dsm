module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register'
  ],
};
