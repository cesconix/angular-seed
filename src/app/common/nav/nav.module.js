import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavComponent from './nav.component';
import './nav.scss';

export default angular
  .module('me.cesconix.myapp.common.nav', [uiRouter])
  .component('nav', NavComponent)
  .name;
