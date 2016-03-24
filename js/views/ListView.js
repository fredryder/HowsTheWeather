var ListView = Backbone.View.extend({

  // if tagName or el not set, the defaults el to an empty div
  // set css id to list
  // this gives us an empty div with id 'list'
  id: 'list',

  initialize: function() {
    // rlisten to the add event and run render anytime the collection uses its 'add' method
    this.listenTo(this.collection, 'add', this.render);
    //this.collection.on('add', this.render, this);
  },

  render: function() {
    // clears it so it re-renders the list
    // inefficient as everything has to be re-rendered. React has solved this.
    this.$el.empty();

    // mapping over each model in the collection and create an entry view for it
    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    // array of EntryViews (divs)
    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    // add els to the DOM
    this.$el.append($els);

    return this;
  }

});
