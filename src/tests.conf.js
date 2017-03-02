import 'angular';
import 'angular-mocks';

const context = require.context('../src', true, /^((?!tests\.conf).)*\.js/);
context.keys().forEach(context);
