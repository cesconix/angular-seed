import angular from 'angular';
import SampleViewerModule from './sample-viewer/sample-viewer.module';

export default angular
  .module('me.cesconix.myapp.components', [
    SampleViewerModule
  ])
  .name;
