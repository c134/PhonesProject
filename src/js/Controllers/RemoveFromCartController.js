var RemoveFromCart = function(buttonId,itemsInCart){
    this.itemsInCart = itemsInCart;
    this.buttonId = buttonId;
    //var result = _.findWhere(Cart.items,this.buttonId);
    //Cart.items = _.without(Cart.items, _.findWhere(Cart.items, this.buttonId));
    //this.itemsInCart = _.without(this.itemsInCart, _.findWhere(this.itemsInCart, {id:this.buttonId}));
    //this.itemsInCart = _.reject(this.itemsInCart,function(e){
    //    e = this.buttonId;
    //    return e === this.itemsInCart.id;
    //})
    var removedArr =[];
    var _total = 0;
    var _price = 0;
    for(var i =0; i < this.itemsInCart.length; i++){
        if(this.buttonId ==this.itemsInCart[i].id){
            _price = this.itemsInCart[i].price;
            _total = this.itemsInCart.total;
            _total-=_price;
            this.itemsInCart.total = _total;
            this.itemsInCart.splice(i,1);
            removedArr.push(this.itemsInCart);
            break;
        }
    }
    //for(var i = 0; i < this.itemsInCart; i++){
    //
    //        return _.reject(this.itemsInCart,function(item){
    //            item = this.itemsInCart[i].id;
    //            return item.id === this.buttonId;
    //        });
    //
    //}
};
