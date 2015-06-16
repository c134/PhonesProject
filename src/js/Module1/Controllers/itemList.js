var itemsOnSaleModel = Backbone.Model.extend({
    defaults:{
        _items: null
    }
});
//var itemsOnSaleCollection = Backbone.Collection.extend({
//    model: itemsOnSaleModel
//});
var itemListView = Backbone.View.extend({
    _template: _.template($('#listTemplate').html()),
    el: $('#phonesDiv'),
    events: {
    'click .buyButton':'_addToCart'
    },
    initialize: function () {
        'use strict';
        this.render();
    },
    render: function () {
        'use strict';
        var rendTemplate = this._template(this.model.attributes);
        this.$el.html(rendTemplate);
        return this;
    },
    _addToCart: function(e){
        'use strict';
        var buttonId = $(e.currentTarget).attr('id');
        console.log(buttonId);
                var result = _.findWhere(this.model.get('_items'), {id: buttonId});
                var purchase = {
                    id: result.id,
                    name: result.name,
                    price: result.price
                };
        console.log(purchase);
                //cartCollection.addItem(purchase);
                //cartList.render();
    }
});
var itemsOnSale = new itemsOnSaleModel;
 itemsOnSale.set({'_items': phones});
var itemList = new itemListView({model: itemsOnSale});
