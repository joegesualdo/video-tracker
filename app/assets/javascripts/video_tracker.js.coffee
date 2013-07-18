window.VideoTracker =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new VideoTracker.Routers.Screencasts()
    Backbone.history.start(pushState: true)

$(document).ready ->
  VideoTracker.initialize()
