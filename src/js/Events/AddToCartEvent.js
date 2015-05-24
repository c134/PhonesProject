$("#list").on('click' ,"button",function(){
    var buttonId = $(this).attr('id');
    AddToCart(buttonId, phones,Cart.items);
    console.log(Cart.items);
    Cart.CalculateTotal();
    RenderCart.render("ordersCartDiv", "cartTemplate", Cart.items);
});
