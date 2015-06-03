var cartList = {
    _itemsCollections: cartCollection,
    _template: _.template($('#cartTemplate').html()),
    _rootElement: $('#ordersCartDiv'),
    //_rootElementUl: $("#cartList"),
    initialize: function () {
        'use strict';
        //this.divId = divId;
        //this._rootElementUl = $("#cartList");
        //this._itemsCollections= cartCollection;
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
        console.log(this._itemsCollections);
        //console.log(data);
    },
    _addEvents: function () {
        'use strict';
        this._rootElement.on('click','.removeButton' , function () {
            var buttonId = $(this).attr('id');
            //var IndexOfItemToRemove = _.findIndex(this._itemsCollections, {id:buttonId});
            //    cartCollection.removeItem(IndexOfItemToRemove);
            //console.log(IndexOfItemToRemove);


            //console.log("collection:" + this._itemsCollections._items);
            var itemToRemove = _.find(this._itemsCollections, function (collection) {
                return collection._items.item.id === buttonId;
            });
            console.log(itemToRemove);
            cartCollection.removeItem(itemToRemove);
            cartList.render();
        });
    }
};
//cartList.initialize('#cartList');
cartList.initialize;