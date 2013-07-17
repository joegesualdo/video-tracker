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