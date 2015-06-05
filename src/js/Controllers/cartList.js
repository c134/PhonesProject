var cartList = {
    _itemsCollections: null,
    _template: _.template($('#cartTemplate').html()),
    _rootElement: $('#ordersCartDiv'),
    initialize: function (collection) {
        'use strict';
        this._itemsCollections = collection;
        this._addEvents();
    },
    render: function () {
        'use strict';
        var data = {
            items: this._itemsCollections.getItems(),
            total: this._itemsCollections.getTotalPrice(),
            TotalQuantity: this._itemsCollections.getTotalQuantity()
        };
        var rendTemplate = this._template({data: data});
        this._rootElement.html(rendTemplate);
    },
    _addEvents: function () {
        'use strict';
        this._rootElement.on('click','.removeButton' , function (e) {
            var buttonId = $( e.currentTarget ).attr('id');
            cartCollection.removeItem(buttonId);
            cartList.render();
        });
    }
};
cartList.initialize(cartCollection);
