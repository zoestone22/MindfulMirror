
modules: [

    //this module displays text on the screen
    {
      module: "helloworld",
      position: "top_bar", 
      config: {
        text: "Hello There",
      },
    },
  
//this module displays the weather for the location selected - using an api key from openweather
{
    module: "weather",
    position: "bottom_left",
    config: {
      weatherProvider: "openweathermap",
      type: "current",
      location: "Bristol",
      locationID: "2654675", 
      //key obtained from open weather map.org 
      apiKey: "715d73d6b0faddf8bfaa85b18ba7d222"
    }
}, 


  //this module shows an image of your choice
{
    module: "MMM-EasyPix",
    position: "top_right",
    config: {
      picName: "mindfulMirror.jpg",     // picture file name
      maxWidth: "100%",        // Size picture 
    }
  },

// this module shows the clock which features the date
  {
    module: "clock",
    position: "top_left", 
    config: {
    },
  },

//this module shows the affirmation 
{
    module: "affirmations",
    position: "bottom_right",
    config: {
        //this module has default config that I coded into it
      }
  },

  
];
