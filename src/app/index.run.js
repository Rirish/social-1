(function() {
  'use strict';

  angular
    .module('social1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
