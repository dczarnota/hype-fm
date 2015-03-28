'use strict';

angular.module('hypeFm')
  .controller('MainCtrl', function($scope, HypedTracks){

    HypedTracks.getHypedTracks().then(function(data){
      $scope.artist = HypedTracks.musicInfo.artists
      $scope.title = HypedTracks.musicInfo.titles;
      $scope.percentageChange = HypedTracks.musicInfo.percentChanges;    
    });
  });
