'use strict';

angular.module('hypeFm')
  .factory('HypedTracks', function($http){
    var HypedTracksFactory = {
      getHypedTracks: function(){
        var url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gethypedtracks&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';
        
        return $http.get(url)
          .then(function(response){
            return response.data;
          })
          .catch(function(error){
            console.log('Error in $http get request: ' + error);
          });
      }
    };
    return HypedTracksFactory;
  });
