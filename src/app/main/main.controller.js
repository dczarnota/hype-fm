'use strict';

angular.module('hypeFm')
  .controller('MainCtrl', function($scope, HypedTracks){

    HypedTracks.getHypedTracks().then(function(data){
      $scope.hypeInfo = HypedTracks.musicInfo.hypeInfo;
    });
  });
