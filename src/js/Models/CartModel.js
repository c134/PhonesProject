var Cart={
    items: [],
    total: 0,
    quantity: 0,
    CalculateTotal: function(){
        var _total = 0;
        var _price = 0;
        for(var i = 0; i < this.items.length; i++){
            this.quantity = this.items.length;
            _price = this.items[i].price;
            _total += _price;
            this.total = _total;
        }
        console.log(this.total);
        console.log(this.quantity);
    }
}


