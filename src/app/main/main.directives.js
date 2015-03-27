'use strict';

angular.module('hypeFm')
  .directive('hypeList', function(){
    return {
      restrict: 'E',
      templateUrl: './app/templates/hypeList-template.html'
    }
  });
