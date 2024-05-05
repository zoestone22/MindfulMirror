
//Activate Affirmation Module
const { getAffirmationOfTheDay } = require('./affirmationModule');

// Display the affirmation for the day
const affirmation = getAffirmationOfTheDay();
console.log("Today's affirmation is:", affirmation);

  