var cartCollection = {
    _items: [],
    addItem: function (obj) {
        'use strict';
        this._items.push(obj);
    },
    removeItem: function (removeItem) {
        'use strict';
        this._items = _.without(this._items, _.findWhere(this._items, removeItem));
    },
    getItems: function () {
        'use strict';
        return this._items;
    },
    getTotalPrice: function () {
        'use strict';
        console.log(this._items);
        var total = 0;
        for (var i = 0; i < this._items.length; i++) {
            total += this._items[i].price;
        }
        return total;
    },
    getQuantity: function () {
        'use strict';
        return this._items.length;
    }
};
itemList.initialize(phones);



