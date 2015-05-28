var itemList = {
    _items: null,
    _template: _.template($("#listTemplate").html()),
    _rootElement: $("#phonesDiv"),
    initialize: function (items) {
        this._items = items;
        this.render();
        this._addEvents();
    },
    render: function () {
        var itemsCopy = _.map(this._items, _.clone);
        var rendTemplate = this._template({items: itemsCopy});
        this._rootElement.html(rendTemplate);
    },
    _addEvents: function () {
        $("#list").on('click', 'button', function () {
            var buttonId = $(this).attr('id');
            var result = _.findWhere(itemList._items, {id: buttonId});
            var purchase = {
                id: result.id,
                name: result.name,
                price: result.price
            };
            cartCollection.addItem(purchase);
            cartList.render();
        });
    }
};
var cartCollection = {
    _items: [],
    addItem: function (arr) {
        this._items.push(arr);
    },
    removeItem: function (removeItem) {
        this._items = _.without(this._items, _.findWhere(this._items, removeItem));
    },
    getItems: function () {
        return this._items;
    },
    getTotalPrice: function () {
        console.log(this._items);
        var total = 0;
        for (var i = 0; i < this._items.length; i++) {
            total += this._items[i].price;
        }
        return total;
    },
    getQuantity: function () {
        var quantity = 0;
        return quantity = this._items.length;
    }
};
var cartList = {
    _itemsCollections: cartCollection,
    _template: _.template($("#cartTemplate").html()),
    _rootElement: $("#ordersCartDiv"),
    initialize: function (divId) {
        this.divId = divId;
    },
    render: function () {
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
        $(this.divId).on('click', 'button', function () {
            var buttonId = $(this).attr('id');
            var itemToRemove = _.findIndex(cartCollection._items, buttonId);
            cartCollection.removeItem(itemToRemove);
            cartList.render();
        });
    }
};
itemList.initialize(phones);
cartList.initialize("#cartList");


