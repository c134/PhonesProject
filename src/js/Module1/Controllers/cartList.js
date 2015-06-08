var cartListModule = (function () {
    'use strict';
    return {
        _itemsCollections: null,
        _template: _.template($('#cartTemplate').html()),
        _rootElement: $('#ordersCartDiv'),
        initialize: function (collection) {

            this._itemsCollections = collection;
            this._addEvents();
        },
        render: function () {
            var data = {
                items: this._itemsCollections.getItems(),
                total: this._itemsCollections.getTotalPrice(),
                TotalQuantity: this._itemsCollections.getTotalQuantity()
            };
            var rendTemplate = this._template({data: data});
            this._rootElement.html(rendTemplate);
        },
        _addEvents: function () {
            this._rootElement.on('click', '.removeButton', function (e) {
                var buttonId = $(e.currentTarget).attr('id');
                cartCollectionModule.removeItem(buttonId);
                cartListModule.render();
            });
        }
    };
}());
cartListModule.initialize(cartCollectionModule);
