var cartModel = Backbone.Model.extend({

    defaults: {
        itemTotalPrice: 0,
        quantity: 1
    }
});
var cartCollection = Backbone.Collection.extend({
    model: cartModel,
    defaults:{
        totalQuantity: 0,
        totalPrice: 0
    }

    //initialize: function(){
    //    this.model.on('change',this.incrementQuantity(), this );
    //},

    //_itemTotalPrice: function () {
    //    'use strict';
    //    for (var i = 0; i < cartCollection.length; i++) {
    //        this.model[i].ItemTotalPrice =  this.model[i].item.price * this.model[i].quantity;
    //    }
    //    console.log(this.model.attributes);
    //}
    //findItem: function () {
    //    'use strict';
    //    //console.log(purchase.item.id);
    //    //var result = _.find(this.collection, function (id) {
    //    //    return this.collection.attributes.item.id === id;
    //    //});
    //    var result = this.collection.findWhere({id: this.model.id});
    //    //console.log(result);
    //    if (typeof result !== 'undefined') {
    //        result.attributes.quantity++;
    //        //this._itemTotalPrice();
    //    }
    //    //else {
    //    //    this._items.push(purchase);
    //    //}
    //},
    //removeItem: function (buttonId) {
    //    'use strict';
    //    console.log(buttonId);
    //    var result = _.find(this._items, function (item) {
    //        return item.item.id === buttonId;
    //    });
    //    console.log(result);
    //    if (typeof  result !== 'undefined' && result.quantity > 0) {
    //        result.quantity--;
    //        this._itemTotalPrice();
    //        console.log(result.quantity);
    //    }
    //    else if (result.quantity === 0) {
    //        this._items = _.without(this._items, _.findWhere(this._items, result));
    //        console.log('deleted:' + this._items);
    //    }
    //},
    //getTotalPrice: function () {
    //    'use strict';
    //    //this._itemTotalPrice();
    //    var total = 0;
    //    for (var i = 0; i < this.models.length; i++) {
    //        total += this.models [i].totalPrice;
    //    }
    //    this.collection.attributes.totalPrice= total;
    //
    //}
    //getTotalQuantity: function () {
    //    'use strict';
    //    var totalQnt = 0;
    //    for (var i = 0; i < this._items.length; i++) {
    //        totalQnt += this._items [i].quantity;
    //    }
    //    return totalQnt;
    //}

});
var cartcollection = new cartCollection();




