import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';
import AppComponent from './app.component';
import './app.scss';

export default angular
  .module('me.cesconix.myapp', [
    uiRouter,
    CommonModule,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    const routes = [
      {
        name: 'home',
        url: '/',
        component: 'app'
      }
    ];

    routes.forEach(route => $stateProvider.state(route));
    $urlRouterProvider.otherwise('/');
  })
  .name;
