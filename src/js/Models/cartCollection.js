var cartCollection = {
    _items: [],
    addItem: function (obj) {
        'use strict';
        var result = _.findWhere(this._items, {id: obj.id});
        if(result){
            result.quantity++;
        }
        else{
            this._items.push(obj);
        }
    },
    removeItem: function (removeItem) {
        'use strict';
        console.log(removeItem);
        var result = _.findWhere(this._items, removeItem);
         if(result.quantity > 0){
            result.quantity--;
            this._items[removeItem] = result;
        }
        else if(result.quantity === 0){
            this._items = _.without(this._items, _.findWhere(this._items, removeItem));
        }
    },
    getItems: function () {
        'use strict';
        return this._items;
    },
    getItemTotalPrice: function(){
        'use strict';
        var itemTotal = 0;
        var price = 0;
        var quantity = 0;
        for(var i = 0; i < this._items.length; i++){
            price = this._items[i].price;
            quantity = this._items[i].quantity;
            itemTotal = price * quantity;
            this._items[i].thisItemTotal = itemTotal;
            console.log(itemTotal);
        }
        return itemTotal;
    },
    getTotalPrice: function () {
        'use strict';
        console.log(this._items);
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
itemList.initialize(phones);



