var InputView = Backbone.View.extend({

  tagName: 'input', // another way (the backbone way) to specify the el tag
  // el: '<input>',

  // list of all events that this view is going to react to
  events: {
    'keydown': 'keyAction', // keyaction method on line 19
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput(); // adds in placeholder text
    return this;
  },

  keyAction: function(e) {

    var isEnterKey = (e.which === 13);

    if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

      this.$el.attr({
        placeholder: 'Sorry, zip code invalid.'
      });
      this.clearInput();

    } else if(isEnterKey) {

      this.collection.addWeatherEntry(this.$el.val());
      this.resetInput();

    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
