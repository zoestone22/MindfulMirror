Module.register("mindfulnessBreathing", {
    // Default module config.
    defaults: {
        // Duration of the breathing exercise in seconds.
        duration: 300 // 5 minutes
    },

    // Override start method.
    start: function () {
        var self = this;
        // Set up the timer interval to update the countdown every second.
        this.timer = setInterval(function () {
            self.updateDom();
        }, 1000);
    },

    // Override getDom method.
    getDom: function () {
        // Create wrapper element.
        var wrapper = document.createElement("div");

        // Get remaining time.
        var remainingTime = this.config.duration - this.getSecondsSinceStart();

        // Display the countdown.
        var countdownElement = document.createElement("div");
        countdownElement.innerHTML = "Embrace the present moment: " + remainingTime + " seconds remain";
        wrapper.appendChild(countdownElement);

        // Display instructions.
        var instructionsElement = document.createElement("div");
        instructionsElement.innerHTML = "<h2>Instructions:</h2><ol><li>Stand comfortably in front of the mirror.</li><li>Inhale deeply through your nose.</li><li>Hold your breath briefly.</li><li>Exhale slowly through your mouth, releasing tension.</li><li>Repeat this process until the timer stops.</li></ol>";
        wrapper.appendChild(instructionsElement);

        // Display message.
        var messageElement = document.createElement("div");
        messageElement.innerHTML = "<h3>Take some time to relax and breathe...</h3>";
        wrapper.appendChild(messageElement);

        return wrapper;
    },

    // Function to calculate seconds since the module started.
    getSecondsSinceStart: function () {
        var now = new Date();
        var startTime = new Date(this.config.startTime);
        var diff = Math.abs(now - startTime);
        return Math.floor(diff / 1000);
    },

    // Override notification handler.
    notificationReceived: function (notification, payload, sender) {
        // Start the countdown when the module is displayed.
        if (notification === "DOM_OBJECTS_CREATED") {
            this.config.startTime = new Date();
        }
    },

    // Override socket notification handler.
    socketNotificationReceived: function (notification, payload) {
        // Handle socket notifications here.
    }
});
