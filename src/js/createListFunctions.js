function createList_Task_1(divID){
    var arr = phones;
    var out = "<ul>";
    for(var i = 0; i < arr.length;i++){
        out+="<li>" + arr[i].age +"<br>" + arr[i].id +"<br><img src='" + arr[i].imageUrl  +"'/><br>"  + arr[i].name + "<br>" + arr[i].snippet + "</li>";
    }
    out+= "</ul>";
    document.getElementById(divID).innerHTML = out;
}
function createList_Task_2(divID){
    var createNewUL = document.createElement("ul");
    createNewUL.id = "phoneList";
    document.getElementById(divID).appendChild(createNewUL);
    for(var i = 0; i < phones.length;i++) {

        var chunk = "<li>" + phones[i].age + "<br>" + phones[i].id + "<br><img src='"
            + phones[i].imageUrl + "'/><br>" + phones[i].name + "<br>" + phones[i].snippet + "</li>";

        document.getElementById("phoneList").innerHTML += chunk;
    }
}
function createList_Task_3(divID){
    var ulList = document.createElement("ul");
    ulList.id = "phonesList";
    for (var i = 0; i < phones.length; i++) {
        var newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(phones[i].age));
        newLi.appendChild(document.createElement("br"));
        newLi.appendChild(document.createTextNode(phones[i].id));
        newLi.appendChild(document.createElement("br"));
        var img =  document.createElement('img');
        img.src = phones[i].imageUrl;
        newLi.appendChild(img);
        //newLi.appendChild(document.createTextNode(phones[i].imageUrl));
        newLi.appendChild(document.createElement("br"));
        newLi.appendChild(document.createTextNode(phones[i].name));
        newLi.appendChild(document.createElement("br"));
        newLi.appendChild(document.createTextNode(phones[i].snippet));

        ulList.appendChild(newLi);
    }
    document.getElementById(divID).appendChild(ulList);

}
function createList_Task_3_working(){
    var ulList = document.createElement("ul");
    ulList.id = "phonesList";
    for(var i = 0; i < phones.length; i++){
        addStep(ulList, phones[i].age);
        addStep(ulList, phones[i].id);

        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src  = phones[i].imageUrl;
        li.appendChild(img);
        ulList.appendChild(li);

        addStep(ulList, phones[i].name);
        addStep(ulList, phones[i].snippet);

    }
    function addStep(ul, text) {
        var _li = document.createElement("li");
        _li.innerHTML = text;
        ul.appendChild(_li);
    }
    document.body.appendChild(ulList)
}

function createList_Task_4(divID){
    divID = "#"+divID;
    var arr= [];
    var $ulList = $("<ul></ul>");
    $ulList.id = "phonesList";
    $(divID).append($ulList);
    $.each(phones, function(i, phone){
        arr.push("<li>" + phone.age +"<br>" + phone.id +
        "<br><img src='" + phone.imageUrl + "'/><br>" + phone.name + "<br>" + phone.snippet +"</li>" );
    });
    $(divID).append(arr.join(' '));
}
function measureTimeExecution(domID, testFunc){
    console.time("timer");
    for(var i = 0; i < 10; i++){
       testFunc();
       var getDiv = document.getElementById(domID);
    }
    getDiv.empty();
    console.timeEnd("timer");
}
HTMLElement.prototype.empty = function() {
        var that = this;
        while (that.hasChildNodes()) {
            that.removeChild(that.lastChild);
        }
    };
//var c = new ListMaker("div1", phones);
////c.CreateUlTask_4();
//c.GetTimeExecutiom(function(){this.CreateUlTask_4});
