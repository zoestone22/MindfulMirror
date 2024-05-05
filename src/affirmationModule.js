// Define the affirmations array
const affirmations = [
    "I release all doubt and fear, embracing confidence and clarity in my decisions",
    "I am the architect of my life; I build its foundation and choose its contents",
    "Every challenge I face is an opportunity for growth and learning",
    "I trust in my intuition and make decisions with clarity and confidence",
    "I am surrounded by love, and I attract positive energy into my life effortlessly",
    "I am deserving of all the good things that come my way, and I graciously accept them",
    "I release all doubts and fears, and I embrace my power to create change",
    "I am capable, strong, and resilient, capable of overcoming any obstacle",
    "I am grateful for the abundance that flows into my life, and I celebrate every blessing",
    "I am worthy of success, happiness, and fulfilment, and I create my own destiny",
  ];
  
  // Function to get the affirmation of the day
  function getAffirmationOfTheDay() {
    // To ensure a different affirmation everyday- this function calcs the index of the affirmation to display based on the current date- ensuring daily rotation
    // Get the current date
    const currentDate = new Date();
    // Use the day of the year to determine the index of the affirmation
    const affirmationIndex = currentDate.getDay() % affirmations.length;
    // Return the affirmation of the day
    return affirmations[affirmationIndex];
  }
  
  // Export the function to be used in other modules
  module.exports = { getAffirmationOfTheDay };
  