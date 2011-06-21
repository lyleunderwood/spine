define(['spine', 'spine/spine.manager'], function(Spine) {

  Spine.Controller.include({
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