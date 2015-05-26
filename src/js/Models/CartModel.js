var itemList = {
    _items: null,
    _template: null,
    _rootElement: null, // для чего нужно это свойство так и осталось для меня загадкой.
    initialize:function(divId, items){
        this.divId = divId;
        this._items = items;
        this.render();
        this._addEvents();
    },
    render:function(){
        var itemsCopy = this._items;
        this._template = _.template($("#listTemplate").html());
        var rendTemplate = this._template({items: itemsCopy});
        $("#" +this.divId).html(rendTemplate);
    },
    _addEvents:function(){
        $("#list").on('click','button', function(){
            var buttonId = $(this).attr('id');
            cartCollection.addItem(buttonId,itemList._items);
            cartCollection.getTotalPrice();
            cartList.initialize("ordersCartDiv");
        });
    }
};
var cartCollection = {
    _items: [],
    _quantity: 0,
    _total: 0,
    addItem: function(buttonId, arr){
        this.buttonId = buttonId;
        this.arr = arr;
        var result = _.findWhere(this.arr,{id:this.buttonId});
        var purchase ={
            id: result.id,
            name: result.name,
            price:result.price
        };
        this._items.push(purchase);
    },
    removeItem:function(buttonId){
        this.buttonId = buttonId;
        for(var i = 0; i < this._items.length; i++){
            if(this.buttonId == this._items[i].id){
                this._total -= this._items[i].price;
                this._items.splice(i,1);
                break;
            }
        }
    },
    getTotalPrice: function(){
        console.log(this._items);
        this._total = 0;
        for(var i = 0; i < this._items.length; i++){
           this._quantity = this._items.length;
            this._total += this._items[i].price;
        }
    }
};
var cartList = {
    _itemsCollections: cartCollection,
    _template: null,
    _rootElement: null,
    initialize: function(divId){
        this.divId = divId;
        cartList.render();
        this._addEvents();
    },
    render:function(){
        var data={
            items: cartCollection._items,
            total:cartCollection._total ,
            quantity:cartCollection._quantity
        };
        this._template = _.template($("#cartTemplate").html());
        var rendTemplate = this._template({data: data});
        $("#" + this.divId).html(rendTemplate);
    },
    _addEvents:function() {
        $("#cartList").on('click','button', function () {
            var buttonId = $(this).attr('id');
            cartCollection.removeItem(buttonId);
            cartCollection.getTotalPrice();
            cartList.initialize("ordersCartDiv");
        });
    }
};
itemList.initialize("phonesDiv",phones);


