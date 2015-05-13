function createList_Task_1(){
    var arr = phones;
    var out = "<ul>";
    for(var i = 0; i < arr.length;i++){
        out+="<li>" + arr[i].age +"</li><br><li>" + arr[i].id +"</li><br><img src='" + arr[i].imageUrl  +"'/></li><br><li>"  + arr[i].name + "</li><br><li>" + arr[i].snippet + "</li>";
    }
    out+= "</ul>";
    document.getElementById("div1").innerHTML = out;
}
function createList_Task_2(){
    var createNewUL = document.createElement("ul");
    createNewUL.id = "phoneList";
    document.getElementById("div1").appendChild(createNewUL);
    for(var i = 0; i < phones.length;i++){

        var createNewLi = document.createElement("li");
        var chunk = "<li>" + phones[i].age +"</li><br><li>" + phones[i].id +"</li><br><img src='"
            + phones[i].imageUrl  +"'/></li><br><li>"  + phones[i].name + "</li><br><li>" + phones[i].snippet + "</li>";

        createNewLi.innerHTML+= chunk;
        document.getElementById("phoneList").appendChild(createNewLi);
    }
}
function createList_Task_3(){
    var ulList = document.createElement("ul");
    ulList.id = "phonesList";
    for (var i = 0; i < phones.length; i++) {
        var newLi = document.createElement("li");
        var textAge = document.createTextNode(phones[i].age);
        var textId = document.createTextNode(phones[i].id);
        var textImg = document.createTextNode(phones[i].imageUrl);
        var textName = document.createTextNode(phones[i].name);
        var textSnippet = document.createTextNode(phones[i].snippet);
        newLi.appendChild(textAge);
        newLi.appendChild(textId);
        newLi.appendChild(textImg);
        newLi.appendChild(textName);
        newLi.appendChild(textSnippet);
        ulList.appendChild(newLi);
    }
    document.body.appendChild(ulList);

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
function createList_Task_4(){
    var arr= [];
    $.each(phones, function(i, phone){
        arr.push("<li>" + phone.age +"</li><br><li>" + phone.id +
        "</li><br><img src='" + phone.imageUrl + "'/></li><br><li>" + phone.name + "</li><br><li>" + phone.snippet +"</li>" );
    });
    $('#phonesListInDiv').append(arr.join(''));
}
function measureTimeExecution(domID, testFunc){
    //console.log(testFunc);
    console.time("timer");
    for(var i = 0; i < 10; i++){
       testFunc();
       var getDiv = document.getElementById(domID);
        getDiv.empty();
    }
    console.timeEnd("timer");
}
HTMLElement.prototype.empty = function() {
        var that = this;
        while (that.hasChildNodes()) {
            that.removeChild(that.lastChild);
        }
    };