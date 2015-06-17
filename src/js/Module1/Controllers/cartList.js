var cartListView = Backbone.View.extend({

    _itemsCollections: null,

    _template: _.template($('#cartTemplate').html()),

    el: $('#ordersCartDiv'),

    initialize: function () {
        'use strict';
        //this.set({_itemsCollections: collection});
        //this._itemsCollections = collection;
        this._itemsCollections = cartCollection;
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        //console.log(this._itemsCollections);
    },
    events: {
        'click .removeButton': '_removeFromCart'
    },
    render: function () {
        'use strict';
        var data = {
            items: this._itemsCollections.getItems(),
            total: this._itemsCollections.getTotalPrice(),
            TotalQuantity: this._itemsCollections.getTotalQuantity()
        };
        console.log(data);
        var rendTemplate = this._template({data: data});
        this.$el.html(rendTemplate);
        return this
    },
    _removeFromCart: function (e) {
        'use strict';
        var buttonId = $(e.currentTarget).attr('id');
        console.log("cartList id: " + buttonId);
        cartCollection.removeItem(buttonId);
        cartList.render();
    }
});
cartList = new cartListView({model: cartCollection});
