define(['dojo', 'spine', 'spine/spine.route'], function(dojo, Spine) {
  Spine.Route = Spine.Route.extend({
    setup: function(options){
      if (options && options.history)
        this.history = this.historySupport && options.history;
        
      if ( this.history )
        this.popstateHandle = dojo.connect(window, 'onpopstate', dojo.hitch(this, this.change));
      else
        this.hashchangeHandle = dojo.connect(window, 'onhashchange', dojo.hitch(this, this.change));
      this.change();
    },

    change: function(e){
      var path = (this.history ? this.getPath() : this.getFragment());
      if (path == this.path) return;
      this.path = path;
      for (var i=0; i < this.routes.length; i++)
        if (this.routes[i].match(path)) return;
    },
    
    unbind: function(){
      if (this.history)
        dojo.disconnect(this.popstateHandle);
      else
        dojo.disconnect(this.hashchangeHandle);
    }
  });

  return Spine.Route;
});