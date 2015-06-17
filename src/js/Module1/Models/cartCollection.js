var cartCollectionModel = Backbone.Model.extend({

    _items: [],

    _itemTotalPrice: function () {
        'use strict';
        for (var i = 0; i < this._items.length; i++) {
            this._items [i].thisItemTotal = this._items [i].item.price * this._items [i].quantity;
        }
    },
    addItem: function (obj) {
        'use strict';
        console.log(obj);
        var purchase = {
            item: _.pick(obj, 'id', 'name', 'price'),
            thisItemTotal: obj.price,
            quantity: 1
        };
        console.log(purchase.item.id);
        var result = _.find(this._items, function (item) {
            return item.item.id === purchase.item.id;
        });
        console.log(result);
        if (typeof result !== 'undefined') {
            result.quantity++;
            this._itemTotalPrice();
        }
        else {
            this._items.push(purchase);
        }
        console.log(this._items);
    },
    removeItem: function (buttonId) {
        'use strict';
        console.log(buttonId);
        var result = _.find(this._items, function (item) {
            return item.item.id === buttonId;
        });
        console.log(result);
        if (typeof  result !== 'undefined' && result.quantity > 0) {
            result.quantity--;
            this._itemTotalPrice();
            console.log(result.quantity);
        }
        else if (result.quantity === 0) {
            this._items = _.without(this._items, _.findWhere(this._items, result));
            console.log('deleted:' + this._items);
        }
    },
    getItems: function () {
        'use strict';
        return this._items;
    },

    getTotalPrice: function () {
        'use strict';
        this._itemTotalPrice();
        var total = 0;
        for (var i = 0; i < this._items.length; i++) {
            total += this._items [i].thisItemTotal;
        }
        return total;

    },
    getTotalQuantity: function () {
        'use strict';
        var totalQnt = 0;
        for (var i = 0; i < this._items.length; i++) {
            totalQnt += this._items [i].quantity;
        }
        return totalQnt;
    }

});
var cartCollection = new cartCollectionModel();



