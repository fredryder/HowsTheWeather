var TitleView = Backbone.View.extend({

  el: '<h1>',

  initialize: function() {
    this.render();
  },

  render: function() {
    // $el, rather than just el is an under-the-hood thing:
    // when backbone creates the title it creates the $el for us,
    // to manipulate the DOM with - it's not the same as el.
    this.$el.text('How\'s the weather?');
    return this;
  }

});
