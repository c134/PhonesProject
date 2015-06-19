var cartListView = Backbone.View.extend({

    collection: null,

    _template: _.template($('#cartTemplate').html()),

    el: $('#ordersCartDiv'),

    initialize: function () {
        'use strict';
        this.collection.on('change reset add remove ', this.render, this);
    },
    events: {
        'click .removeButton': '_removeFromCart'
    },

    render: function () {
        'use strict';
        var rendTemplate = this._template({items: this.collection.toJSON});
        this.$el.html(rendTemplate);
        return this
    },
    _removeFromCart: function (e) {
        'use strict';
        var buttonId = $(e.currentTarget).attr('id');
        console.log("cartList id: " + buttonId);
        cartCollection.removeItem(buttonId);

    }
});
cartList = new cartListView({collection:cartcollection});
