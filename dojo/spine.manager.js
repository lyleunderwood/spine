define(['../spine.js', '../lib/spine.controller.manager.js'], function(Spine) {

  Spine.Controller.include({
    active: function(callback){
      if (typeof callback == "function") 
        dojo.connect(this, "active", this, callback) 
      else {
        var args = Spine.makeArray(arguments);
        args.unshift("active");
        this.trigger.apply(this, args);
      }
      return this;
    },

    activate: function(){
      dojo.addClass(this.el, 'active');
      return this;
    },
  
    isActive: function(){
      return dojo.hasClass(this.el, 'active');
    },

    deactivate: function(){
      dojo.removeClass(this.el, "active");
      return this;
    }
  });
  return Spine;
});