var EntryView = Backbone.View.extend({

  // empty div with className 'entry'
  className: 'entry',

  // underscore function that takes a string - it knows to replace <%= unit %> (the swap token) with the variable's value.
  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    // uses the template (declared above) to provide the html (string) for the entry
    var entry = this.template({
      weather: this.model.get('weather'),
      unit: this.model.get('unit'),
      city: this.model.get('city')
    });

    // set the html for the 
    this.$el.html(entry);

  },

  clickAction: function() {

    // the toggleUnit method is located on the model, this.model (see WeatherEntry)
    this.model.toggleUnit();

  }

});
