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
            TotalQuantity: this._itemsCollections.getTotalQuantity()
        };
        var rendTemplate = this._template({data: data});
        this._rootElement.html(rendTemplate);
        this._addEvents();
    },
    _addEvents: function () {
        'use strict';
        $(this.divId).on('click','.removeButton' , function (e) {
            var buttonId = $( e.currentTarget ).attr('id');
            cartCollection.removeItem(buttonId);
            cartList.render();
        });
    }
};
cartList.initialize('#cartList');
//cartList.initialize;
