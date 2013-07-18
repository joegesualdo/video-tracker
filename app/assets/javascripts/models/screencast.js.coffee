class VideoTracker.Models.Screencast extends Backbone.Model
    url : ->
      "/videos/#{this.get('id')}.json"