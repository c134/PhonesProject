$("#list").delegate("button",'click',function(){
   //alert(this.id);
    var purchase = $.grep(phones, function (_phone) {
        return _phone.id == this.id;
    })
    console.log(purchase.id);
});
