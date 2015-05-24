
//var temp = _.template($("#cartTemplate").html());
//var rend = temp({items:Cart.items});
//$("#ordersCartDiv").html(rend);
var RenderCart = {
    render: function(divId, tempId, arr){
        this.divId = divId;
        this.tempId = tempId;
        this.arr = arr;
        var executeTemplate = _.template($("#" + this.tempId).html());
        var rendTemplate = executeTemplate({items:this.arr});
        $("#" + this.divId).html(rendTemplate);
    }
};