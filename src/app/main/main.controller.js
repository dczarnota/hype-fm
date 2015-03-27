'use strict';

angular.module('hypeFm')
  .controller('MainCtrl', function($scope, HypedTracks){

    HypedTracks.getHypedTracks().then(function(music){
      $scope.artist = music.tracks.track[0].artist.name;
      $scope.title = music.tracks.track[0].name;
      $scope.percentageChange = music.tracks.track[0].percentagechange;
    });

  });
