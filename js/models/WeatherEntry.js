var WeatherEntry = Backbone.Model.extend({

  // here we define the shape of our data (model)
  defaults: {
    zipcode: '',
    city: '',
    weather: '',
    unit: '°F'
  },

  initialize: function() {},

  

  // if you manipulate the data it happens here in the model



  toggleUnit: function() {

    var isImperial = this.get('unit') === '°F';

    if (isImperial) {
      var celsius = (this.get('weather') - 32) * (5 / 9);
      this.set({
        'unit': '°C',
        'weather': celsius.toFixed(2)
      });
    }
    else {
      var fahrenheit = (this.get('weather') / (5 / 9)) + 32;
      this.set({
        'unit': '°F',
        'weather': fahrenheit.toFixed(2)
      });
    }

  }

});
