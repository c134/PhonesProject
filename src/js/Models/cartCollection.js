var cartCollection = {
    _items: [],
    addItem: function (obj) {
        'use strict';
        var purchase = {
            item: _.pick(obj, 'id', 'name', 'price'),
            thisItemTotal: obj.price,
            quantity: 1
        };
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
    removeItem: function (obj) {
        'use strict';
        console.log(obj);
        //var itemToRemove = _.clone(obj)
        var itemToRemove = _.map(obj, _.clone());
        //var itemToRemove = {
        //    item: _.pick(obj, 'id', 'name', 'price'),
        //    thisItemTotal: obj.price,
        //    quantity: obj.quantity
        //};
        console.log(itemToRemove);
        var result = _.find(this._items, function(item){
           return item.item.id === itemToRemove.item.id;
        });
        if(typeof  result !== 'undefined' && result.quantity > 0){
            result.quantity--;
            this._itemTotalPrice();
        }
        else{
            this._items = _.without(this._items, _.findWhere(this._items, result));
        }
        //var result = _.findWhere(this._items, obj);
        //if(result.quantity > 0){
        //    result.quantity--;
        //    this._items[removeItem] = result;
        //}
        //else if(result.quantity === 0){
        //    this._items = _.without(this._items, _.findWhere(this._items, removeItem));
        //}

    },
    getItems: function () {
        'use strict';
        return this._items;
    },
    _itemTotalPrice: function(){
        'use strict';
        for(var i = 0; i < this._items.length; i++){
            this._items[i].thisItemTotal = this._items[i].item.price * this._items[i].quantity;
        }
    },
    getTotalPrice: function () {
        'use strict';
        this._itemTotalPrice();
        var total = 0;
        for (var i = 0; i < this._items.length; i++) {
            total += this._items[i].thisItemTotal;
        }
        return total;

    },
    getTotalQuantity: function () {
        'use strict';
        var totalQnt = 0;
         for(var i = 0; i < this._items.length; i++){
             totalQnt += this._items[i].quantity;
         }
        return totalQnt;
    }
};




