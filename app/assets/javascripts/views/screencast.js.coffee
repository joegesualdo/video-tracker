class VideoTracker.Views.ScreencastView extends Backbone.View
    template : JST['screencasts/screencast']
    tagName : "li"
    events :
        "click" : "toggleWatched"
        "dblclick" : "shiftRight"

    initialize: ->
        console.log("screencastView init")
        if (@model.get('watched') == true)
            $(@el).addClass('watched')

        $('ul.screencasts').append(@render())

    toggleWatched : ->
        if (@model.get('watched') == true)
            @model.set({'watched': false}).save()
            $(@el).removeClass('watched')
        else
            @model.set({'watched' : true}).save()
            $(@el).addClass('watched')

    shiftRight: ->
      $(@el).toggleClass('shiftRight')
    render : ->
       $(@el).html(@template({model: @model}))

