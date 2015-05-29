var cartList = {
    _itemsCollections: cartCollection,
    _template: _.template($('#cartTemplate').html()),
    _rootElement: $('#ordersCartDiv'),
    //_rootElementUl: $("#cartList"),
    initialize: function (divId) {
        'use strict';
        this.divId = divId;
        //this._rootElementUl = $("#cartList");
        this._addEvents();
    },
    render: function () {
        'use strict';
        var data = {
            items: this._itemsCollections.getItems(),
            total: this._itemsCollections.getTotalPrice(),
            quantity: this._itemsCollections.getQuantity()
        };
        var rendTemplate = this._template({data: data});
        this._rootElement.html(rendTemplate);
        this._addEvents();
    },
    _addEvents: function () {
        'use strict';
        $(this.divId).on('click','.removeButton' , function () {
            var buttonId = $(this).attr('id');
            var itemToRemove = _.findIndex(cartCollection._items, buttonId);
            cartCollection.removeItem(itemToRemove);
            cartList.render();
        });
    }
};
cartList.initialize('#cartList');