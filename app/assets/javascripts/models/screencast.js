Screencast = Backbone.Model.extend({
    url : function(){
        return "/videos/" + this.get('id') + ".json";
    }
});