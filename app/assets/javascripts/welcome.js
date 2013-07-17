$(document).ready(function(){
  Screencast = Backbone.Model.extend({
    url : function(){
      return "/videos/" + this.get('id') + ".json";
    }
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
           
           // Can not get the image to render
           var img = '<img src="' + model.get('image') + '"/>';
           console.log(img);
           $(view.el).append(img);

           $('ul.screencasts').append(view.render());
      });
    }
  });

  //----

  
  
  //------

  var ScreencastView = Backbone.View.extend({
    tagName : "li",
    events : {
      "click" : "toggleWatched"
    },
    toggleWatched : function(){
      if (this.model.get('watched') == true){
        this.model.set({'watched': false}).save();
        $(this.el).removeClass('watched');
      } else {
        this.model.set({'watched' : true}).save();
        $(this.el).addClass('watched');
      }
    },
    render : function(){
      return $(this.el).text(this.model.get('title'));
    }
  });

})

