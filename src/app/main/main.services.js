angular.module('hypeFm')
  .factory('HypedTracks', function($http){
    var HypedTracksFactory = {
      data: {},
      hypedTracks: [],
      getHypedTracks: function(){
        var url = '';
        return $http.get(url)
          .then(function(response){
            HypedTracksFactory.data = response.data;
            HypedTracksFactory.hypedTracks = HypedTracksFactory.data.tracks.track;
            console.log('HypedTracksFactory.data: '+HypedTracksFactory.data);
            console.log('HypedTracksFactory.hypedTracks[0].artist.name: '+HypedTracksFactory.hypedTracks[0].artist.name);
          })
          .catch(function(error){
            console.log('Error in $http get request: ' + error);
          });
      }
    };
    return HypedTracksFactory;
  });
