var itemList = {
    _items: null,
    _template: _.template($("#listTemplate").html()),
    _rootElement: $("#phonesDiv"),
    initialize: function (items) {
        this._items = items;
        this.render();
        this._addEvents();
    },
    render: function () {
        var itemsCopy = _.map(this._items, _.clone);
        var rendTemplate = this._template({items: itemsCopy});
        this._rootElement.html(rendTemplate);
    },
    _addEvents: function () {
        this._rootElement.on('click','.buyButton' ,function () {
            var buttonId = $(this).attr('id');
            var result = _.findWhere(itemList._items, {id: buttonId});
            var purchase = {
                id: result.id,
                name: result.name,
                price: result.price
            };
            cartCollection.addItem(purchase);
            cartList.render();
        });
    }
};
