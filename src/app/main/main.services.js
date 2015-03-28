'use strict';

angular.module('hypeFm')
  .factory('HypedTracks', function($http, $cacheFactory){
    var HypedTracksFactory = {
      musicInfo: {
        hypeInfo: []
      },
      getHypedTracks: function(){
        var url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gethypedtracks&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';

        return $http.get(url, { cache: true })
          .success(function(data){
            angular.forEach(data.tracks.track, function(value){
              HypedTracksFactory.musicInfo.hypeInfo.push([value.artist.name, value.name, value.percentagechange]);
            });
          })
          .catch(function(error){
            console.log('Error in $http get request: ' + error);
          });
      }
    };
    return HypedTracksFactory;
  });
