//define default config options 
const DEFAULT_CONFIG = {
    updateInterval: 24 * 60 * 60 * 1000, // update every day 
    initialLoadDelay: 1250,
    retryDelay: 2500,
    size: "medium"// default size of the module
};

// Register the module with Magic Mirror package 
Module.register("affirmations", {
    //link default configuration options 
    defaults: DEFAULT_CONFIG,

    // array containing the affirmations
    affirmations: [
        "I release all doubt and fear, embracing confidence and clarity in my decisions",
        "I am the architect of my life; I build its foundation and choose its contents",
        "Every challenge I face is an opportunity for growth and learning",
        "I trust in my intuition and make decisions with clarity and confidence",
        "I am surrounded by love, and I attract positive energy into my life effortlessly",
        "I am deserving of all the good things that come my way, and I graciously accept them",
        "I release all doubts and fears, and I embrace my power to create change",
        "I am capable, strong, and resilient, capable of overcoming any obstacle",
        "I am grateful for the abundance that flows into my life, and I celebrate every blessing",
        "I am worthy of success, happiness, and fulfilment, and I create my own destiny"
    ],

     // this is called when the module is started
    start: function() {
        Log.info(`Starting module: ${this.name}`);
         // Initialise the affirmation variable
        this.affirmation = "";
        // Schedule loading of affirmation and updating the DOM
        setTimeout(() => {
            this.getAffirmation();
            this.updateDom();
        }, this.config.initialLoadDelay);
        // Schedule periodic updates
        this.scheduleUpdate();
    },
    // function gets stylesheets for the module
    getStyles: function() {
        return ["affirmations.css"];
    },
    // function creates and returns the module's DOM
    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.className = `bright ${this.config.size}`;
        wrapper.innerHTML = this.affirmation;
        return wrapper;
    },
    //this function sets updates
    scheduleUpdate: function() {
        setInterval(() => {
            this.getAffirmation();
            this.updateDom();
        }, this.config.updateInterval);
    },
    // this function gets a random affirmation 
    getAffirmation: function() {
        // pick a random index within the range of affirmations array
        const affirmationIndex = Math.floor(Math.random() * this.affirmations.length);
        //set current affirmation to the randomly selected one 
        this.affirmation = this.affirmations[affirmationIndex];
        //log the affirmation
        Log.info(`Affirmation of the day: ${this.affirmation}`);
    }
});