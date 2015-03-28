'use strict';

angular.module('hypeFm')
  .factory('HypedTracks', function($http){
    var HypedTracksFactory = {
      musicInfo: {
        artists: [],
        titles: [],
        percentChanges: []
      },
      getHypedTracks: function(){
        var url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gethypedtracks&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';

        return $http.get(url)
          .success(function(data){
            angular.forEach(data.tracks.track, function(value){
              HypedTracksFactory.musicInfo.artists.push(value.artist.name);
              HypedTracksFactory.musicInfo.titles.push(value.name);
              HypedTracksFactory.musicInfo.percentChanges.push(value.percentagechange);
            });
          })
          .catch(function(error){
            console.log('Error in $http get request: ' + error);
          });
      }
    };
    return HypedTracksFactory;
  });
