var cartCollection = {
    _items: [],
    addItem: function (obj) {
        this._items.push(obj);
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
        return this._items.length;
    }
};
itemList.initialize(phones);
cartList.initialize("#cartList");


