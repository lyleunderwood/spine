require(['../examples/jquery.js', 'specs/class.js', 'specs/controller.js', 'specs/events.js', 'specs/model.js', 'specs/route.js', 'specs/model.local.js'], function() {
    //This function is called when scripts/helper/util.js is loaded.

    require.ready(function() {
        //This function is called when the page is loaded
        //(the DOMContentLoaded event) and when all required
        //scripts are loaded.

        //Do nested require() calls in here if you want to load code
        //after page load.
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();
    });
});
