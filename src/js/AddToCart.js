$("#list").delegate("button",'click',function(){

        var  purchase = {id: null,name: null,price: null };
    var purchases = [];
    for(var i = 0; i < phones.length; i++){
        if(this.id === phones[i].id){
          purchase.id =  phones[i].id;
            purchase.name = phones[i].name;
            purchase.price = phones[i].price;
            //break;
             purchases.push(purchase);
            console.log(purchases);
            $.each( purchases, function(i, purchase){
                purchases.push("<li id='"+ purchase.id +"'>" + purchase.id +
                "<br>" + purchase.name + "<br>" + "Price:" +purchase.price + "<br><button id='"+purchase.id+"' type='button' class='btn-default'>remove</button>" +"</li>" );

            });
            $('#ordersUl').append(purchases);
        }
    }

    //var temp = _.template($("#cartTemplate").html());
    //var getPurchase = temp({purchases: purchases});
    //$("#ordersCartDiv").html(getPurchase);

    //<% for (var i=0; i< purchase.length; i++) { %>
    //<li><%=purchase[i].name%><br>
    //    <%=purchase[i].id%><br>
    //    <p>Price: <%=purchase[i].price%></p>
    //    </li>
    //    <%}%>
    //<% for(var item in purchase) { %>
    //<li><%= purchase[item] %></li>
    //    <% } %>

});
$("#ordersCartDiv").delegate("button","click", function() {
    //if(this.id===$('li').attr('id')){
    //
    //}
    //var id = "#" + this.id;
    //$(id).remove();
});
$(window).scroll(function(){
    $("#ordersCartDiv").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft()) + "px"});
});

