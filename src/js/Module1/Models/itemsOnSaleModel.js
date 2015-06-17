var itemsOnSaleModel = Backbone.Model.extend({
    defaults: {
        _items: null
    }
});
var itemsOnSale = new itemsOnSaleModel;
itemsOnSale.set({'_items': phones});