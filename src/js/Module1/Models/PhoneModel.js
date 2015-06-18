var Phone = Backbone.Model.extend({
    defaults: {
        "age": null,
        "id": null,
        "imageUrl": null,
        "name": null,
        "snippet": null,
        "price": null
    }
});
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
        console.log(buttonId);
        //var result = this.collection.get(buttonId);
        //var result = _.findWhere(this.collection, {id: buttonId});
        var result = this.collection.findWhere({id: buttonId});
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
var phonesCollection = new PhonesCollection();
for (var i = 0; i < phones.length; i++) {
    phonesCollection.add(new Phone({
            age: phones[i].age,
            id: phones[i].id,
            imageUrl: phones[i].imageUrl,
            name: phones[i].name,
            snippet: phones[i].snippet,
            price: phones[i].price
        }
    ))
}
var itemlist = new itemListView({collection: phonesCollection});
console.log(phonesCollection);