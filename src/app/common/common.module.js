import angular from 'angular';
import NavModule from './nav/nav.module';

export default angular
  .module('me.cesconix.myapp.common', [
    NavModule
  ])
  .name;
