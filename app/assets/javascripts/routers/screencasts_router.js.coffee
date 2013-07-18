class VideoTracker.Routers.Screencasts extends Backbone.Router
    routes:
        '' : 'index'

    initialize: ->
        @collection = new VideoTracker.Collections.Screencasts()
        @collection.fetch()


    index: ->
      view =  new VideoTracker.Views.ScreencastsIndexView(collection: @collection)
      $('#container').html(view.render().el)