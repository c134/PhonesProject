$("#ordersCartDiv,#cartList").on("click","button", function () {
    var buttonId = $(this).attr('id');
    RemoveFromCart(buttonId,Cart.items);
    console.log(Cart.items);
    Cart.CalculateTotal();
    RenderCart.render("ordersCartDiv", "cartTemplate", Cart.items);
});
