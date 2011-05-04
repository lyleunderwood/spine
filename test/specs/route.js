define('routetests', ['../spine.js', '../lib/spine.route.js'], function(Spine) {
describe("Routing", function(){
  var Route = Spine.Route;
  var spy;
  
  var navigate = function(str, callback){
    window.location.hash = str;
    waits(50);
    if (callback)
      runs(callback);
  };
  
  beforeEach(function(){
    Route.setup();    

    var noop = {spy: function(){}};
    spyOn(noop, "spy");
    spy = noop.spy;
    
    Route.history = false;
    Route.routes  = [];
  });
  
  afterEach(function(){
    Route.unbind();
    window.location.hash = "";
  });

  it("can can navigate", function(){
    Route.navigate("/users/1");
    expect(window.location.hash).toEqual("#/users/1");
    
    Route.navigate("/users", 2);
    expect(window.location.hash).toEqual("#/users/2");
  });
  
  it("can trigger routes", function(){
    Route.add({
      "/users":  $.proxy(spy, jasmine),
      "/groups": $.proxy(spy, jasmine)
    });
    
    navigate("/users", function(){
      expect(spy).toHaveBeenCalled();            
    });
    
    navigate("/groups", function(){
      expect(spy).toHaveBeenCalled();      
    });
  });
  
  it("can call routes with params", function(){
    Route.add({
      "/users/:id/:id2": spy
    });
    
    navigate("/users/1/2", function(){
      expect(spy).toHaveBeenCalledWith("1", "2");
    });
  });
  
  it("can call routes with glob", function(){
    Route.add({
      "/page/*stuff": spy
    });
    
    navigate("/page/gah", function(){
      expect(spy).toHaveBeenCalledWith("gah");
    });
  });
  
  it("shouldn't trigger routes when navigating", function(){
    Route.add({
      "/users/:id": spy
    });
    
    Route.navigate("/users/1");
    
    waits(50);
    
    runs(function(){
      expect(spy).not.toHaveBeenCalled();
    });
  });
  
  it("has option to trigger routes when navigating", function(){
    Route.add({
      "/users/:id": spy
    });
    
    Route.navigate("/users/1", true);
    
    waits(50);
    
    runs(function(){
      expect(spy).toHaveBeenCalled();
    });
  });
});
});