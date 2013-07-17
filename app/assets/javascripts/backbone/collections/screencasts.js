var Screencasts = Backbone.Collection.extend({
    model : Screencast
});
var screencasts = new Screencasts();

screencasts.url = "/videos.json";

screencasts.fetch({
    success : function(){
        _.each(screencasts.models, function(model){
            view = new ScreencastView({model : model});
            if (model.get('watched') == true){
                $(view.el).addClass('watched');
            }

            // Can not get the image to render
            var img = '<img src="' + model.get('image') + '"/>';
            console.log(img);
            $(view.el).append(img);

            $('ul.screencasts').append(view.render());
        });
    }
});