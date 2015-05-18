var Abstract_ListMaker = {
    initialize: function(divID, arr){
        this.divID = divID;
        this.arr = arr;
    },
    //Empty abstract function
    RenderList: function(){},

    GetExecutionTime: function(testFunc){
        console.time("timer");
        for(var i = 0; i < 10; i++){
            testFunc();
            //ListMakerTask_1.RenderList();
            var getDiv = document.getElementById(this.divID);
        }
        getDiv.empty();
        console.timeEnd("timer");
    }
};
var ListMakerTask_1 =  _.create(Abstract_ListMaker,{

    RenderList: function(){
    var out = "<ul>";
    for(var i = 0; i < this.arr.length;i++){
        out+="<li>" + this.arr[i].age +"<br>" + this.arr[i].id +"<br><img src='" + this.arr[i].imageUrl  +"'/><br>"  + this.arr[i].name + "<br>" + this.arr[i].snippet + "</li>";
    }
    out+= "</ul>";
    document.getElementById(this.divID).innerHTML = out;
}
});
var ListMakerTask_2 = _.create(Abstract_ListMaker, {
    RenderList: function(){
    var createNewUL = document.createElement("ul");
    createNewUL.id = "phoneList";
    document.getElementById(this.divID).appendChild(createNewUL);
    for(var i = 0; i < this.arr.length;i++) {

        var chunk = "<li>" + this.arr[i].age + "<br>" + this.arr[i].id + "<br><img src='"
            + this.arr[i].imageUrl + "'/><br>" + this.arr[i].name + "<br>" + this.arr[i].snippet + "</li>";

        document.getElementById("phoneList").innerHTML += chunk;
    }
}});
var ListMakerTask_3 = _.create(Abstract_ListMaker,{
    RenderList: function(){
        var ulList = document.createElement("ul");
        ulList.id = "phonesList";
        for (var i = 0; i < this.arr.length; i++) {
            var newLi = document.createElement("li");
            newLi.appendChild(document.createTextNode(this.arr[i].age));
            newLi.appendChild(document.createElement("br"));
            newLi.appendChild(document.createTextNode(this.arr[i].id));
            newLi.appendChild(document.createElement("br"));
            var img =  document.createElement('img');
            img.src = this.arr[i].imageUrl;
            newLi.appendChild(img);
            //newLi.appendChild(document.createTextNode(phones[i].imageUrl));
            newLi.appendChild(document.createElement("br"));
            newLi.appendChild(document.createTextNode(this.arr[i].name));
            newLi.appendChild(document.createElement("br"));
            newLi.appendChild(document.createTextNode(this.arr[i].snippet));

            ulList.appendChild(newLi);
        }
        document.getElementById(this.divID).appendChild(ulList);
    }
});
var ListMakerTask_4 = _.create(Abstract_ListMaker,{
    RenderList: function(){
        this.divID = "#"+this.divID;
        var arr= [];
        var $ulList = $("<ul></ul>");
        $ulList.id = "phonesList";
        $(this.divID).append($ulList);
        $.each(this.arr, function(i, phone){
            arr.push("<li>" + phone.age +"<br>" + phone.id +
            "<br><img src='" + phone.imageUrl + "'/><br>" + phone.name + "<br>" + phone.snippet +"</li>" );
        });
        $(this.divID).append(arr.join(' '));
    }
})
HTMLElement.prototype.empty = function() {
    var that = this;
    while (that.hasChildNodes()) {
        that.removeChild(that.lastChild);
    }
};

