class SampleViewerService {
  /**
   * constructor - Description
   * @param {type} $http  Description
   * @return {type} Description
   */
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  /**
   * getListByType - Description
   * @param {type} typeId Description
   * @return {type} Description
   */
  getListByType(typeId) {
    const url = `${__API_URL__}/api/types/${typeId}`; /* eslint no-undef: */
    return this.$http.get(url);
  }
}

export default SampleViewerService;
