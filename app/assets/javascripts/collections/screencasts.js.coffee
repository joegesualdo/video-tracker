class VideoTracker.Collections.Screencasts extends Backbone.Collection
    model : VideoTracker.Models.Screencast
    url: "/videos.json"

#var screencasts = new Screencasts();
#
#
#screencasts.fetch({
#    success : function(){
#        _.each(screencasts.models, function(model){
#            var view = new ScreencastView({model : model});
#        });
#    }
#});