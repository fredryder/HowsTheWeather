var AppView = Backbone.View.extend({

  // el is the app ID (in the html)
  el: '#app',

  initialize: function() {
    // collection is available, even though it's explicity stated on the view - done in the background

    this.title = new TitleView();  // rendering happens here (in the TitleView) - DOM node in memory, but it hasn't been appended to the DOM yet. That happens on Line 34

    this.input = new InputView({   // passing a reference intto InputView
      collection: this.collection
    });

    this.list = new ListView({     // listView needs to re-render if collection changes
      collection: this.collection
    });

    // render happens immediately on instantiation of the view
    this.render();
  },


  
  render: function() {
    
    // $el, rather than just el (see line 4) is an under-the-hood thing:
    // when backbone creates the title it creates the $el for us,
    // to manipulate the DOM with

    this.$el.append([
      this.title.$el, // the el is defined by the the view --> in the case of title <h1>
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});
