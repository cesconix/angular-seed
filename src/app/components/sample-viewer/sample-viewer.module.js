import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SampleViewerComponent from './sample-viewer.component';
import SampleViewerService from './sample-viewer.service';
import './sample-viewer.scss';

export default angular
  .module('me.cesconix.myapp.components.sampleViewer', [
    uiRouter
  ])
  .service('sampleViewerService', SampleViewerService)
  .component('sampleViewer', SampleViewerComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state({
        name: 'home.type',
        url: 'types/{typeId}',
        component: 'sampleViewer',
        reload: true
      });

    $urlRouterProvider.otherwise('/');
  })
  .name;
