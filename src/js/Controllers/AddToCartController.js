var AddToCart = function(buttonId, arr, modelArr){
    this.buttonId = buttonId;
    this.arr = arr;
    this.modelArr = modelArr;
    var result = _.findWhere(this.arr,{id:buttonId});
            var purchase ={
                id: result.id,
                name: result.name,
                price:result.price
            };
            console.log(purchase);
            this.modelArr.push(purchase);
    };


