var cartList = Backbone.View.extend( {
    defaults:{
        _itemsCollections: null
    },
        _template: _.template($('#cartTemplate').html()),
        el: $('#ordersCartDiv'),
        initialize: function (collection) {
        'use strict';
            this.set({_itemsCollections: collection});
        //this._itemsCollections = collection;
        this._addEvents();
    },
    render: function () {
        'use strict';
        var data = {
            items: _itemsCollections.getItems(),
            total: _itemsCollections.getTotalPrice(),
            TotalQuantity: _itemsCollections.getTotalQuantity()
        };
        var rendTemplate = this._template({data: data});
        this.$el.html(rendTemplate);
    },
    _addEvents: function () {
        'use strict';
        this.$el.on('click','.removeButton' , function (e) {
            var buttonId = $( e.currentTarget ).attr('id');
            cartCollection.removeItem(buttonId);
            cartList.render();
        });
    }
});

