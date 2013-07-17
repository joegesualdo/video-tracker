$(document).ready(function(){
  Screencast = Backbone.Model.extend({
  });

  var screencast = new Screencast();
  screencast.url = '/videos/2.json';

  screencast.fetch({
    success : function(){
      console.log(screencast.get('title'));
    }
  });

  // -------
 
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
           var img = $('<img/>').attr({ 'src' : model.get('image')})
           $(view.el).append(img);
           $('ul.screencasts').append(view.render());
      });
    }
  });

  //-----

  var ScreencastView = Backbone.View.extend({
    tagName : "li",
    render : function(){
      return $(this.el).text(this.model.get('title'));
    }
  });

})

