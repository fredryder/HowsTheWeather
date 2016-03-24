var Weather = Backbone.Collection.extend({

  // what is the shape of the collection?
  // just have to say what kind of model its going to hold

  // simply pass in a reference to the weather model function
  // collections can only store one type of model
  model: WeatherEntry,

  addWeatherEntry: function(zipcode) {

    // AJAX call to get data
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      function(data) {

        // add/or push a model into the collection
        // .add() is a method for collections
        // correct way to do it, so any listeners know that there a new entry added       
        this.add({
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp.toFixed(2)
          });
      // this is jQuery, so we need to bind it to the COLLECTION 
      }.bind(this)
    );

  }

});


// note: backbone has a dependency on jQuery