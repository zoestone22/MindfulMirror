Module.register("MindfulBreathing", {
    // Module defaults
    defaults: {
        // Add any default options here
    },

    start: function() {
        // Module started
    },

    getDom: function() {
        // Create and return the DOM structure for the module
        var wrapper = document.createElement("div");
        wrapper.className = "mindful-breathing";
        wrapper.innerHTML = "Mindful Breathing Activity";
        return wrapper;
    }
});
