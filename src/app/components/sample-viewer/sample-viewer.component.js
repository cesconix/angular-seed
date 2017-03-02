import template from './sample-viewer.html';
import './sample-viewer.scss';

class SampleViewerController {
  /**
   * constructor - Description
   * @param {type} $stateParams        Description
   * @param {type} sampleViewerService Description
   * @return {type} Description
   */
  constructor($stateParams, sampleViewerService) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.sampleViewerService = sampleViewerService;
    this.types = [];
  }

  /**
   * $onInit - Description
   * @return {type} Description
   */
  $onInit() {
    const typeId = this.$stateParams.typeId;
    this.sampleViewerService.getListByType(typeId)
      .then((res) => {
        this.data = res.data.data;
      });
  }
}

export default {
  template,
  controller: SampleViewerController
};
