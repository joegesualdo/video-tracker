class VideoTracker.Views.ScreencastsIndexView extends Backbone.View
    className: "screencastlist"
    template: JST['screencasts/screencasts_index']
    initialize: ->
        @collection.on('reset', @render, this)
        @collection.on('add', @appendScreencast, this)
    render: ->
        $("#app").html(@template())
        @collection.each(@appendScreencast)
        this
    appendScreencast: (screencast) =>
      view = new VideoTracker.Views.ScreencastView(model: screencast)
      $('.screencasts').append(view.render())
