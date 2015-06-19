var Phone = Backbone.Model.extend({});
var PhonesCollection = Backbone.Collection.extend({
    model: Phone
});
var itemListView = Backbone.View.extend({

    collection: null,
    _template: _.template($('#listTemplate').html()),
    el: $('#phonesDiv'),
    events: {
        'click .buyButton': '_addToCart'
    },
    initialize: function () {
        'use strict';
        this.render();
    },
    render: function () {
        'use strict';
        var rendTemplate = this._template({items: this.collection.toJSON()});
        this.$el.html(rendTemplate);
        return this;
    },
    _addToCart: function (e) {
        'use strict';
        var buttonId = $(e.currentTarget).attr('id');
        var result = this.collection.findWhere({id: buttonId});
        var purchase = {
            id: result.attributes.id,
            name: result.attributes.name,
            price: result.attributes.price
        };
        //var purchase = new cartModel({
        //    id: buttonId,
        //    item: _.pick(purchase, 'id', 'name', 'price'),
        //    itemTotalPrice: purchase.price
        //});
        //cartcollection.addToCart(new cartModel({
        //    id: buttonId,
        //    item: _.pick(purchase, 'id', 'name', 'price'),
        //    itemTotalPrice: purchase.price
        //}));
        cartcollection.add(new cartModel({
            id: buttonId,
            item: _.pick(purchase, 'id', 'name', 'price'),
            itemTotalPrice: purchase.price
        }));
        //console.log(cartcollection.get('quantity'));
    }
});
var phonesCollection = new PhonesCollection(phones);
var itemlist = new itemListView({collection: phonesCollection});
