function ListMaker(divID, arr){
    this.divID = divID;
    this.arr = arr;
    this.CreateUlTask_1 = function createList_Task_1(){
        var out = "<ul>";
        for(var i = 0; i < this.arr.length;i++){
            out+="<li>" + arr[i].age +"<br>" + arr[i].id +"<br><img src='" + arr[i].imageUrl  +"'/><br>"  + arr[i].name + "<br>" + arr[i].snippet + "</li>";
        }
        out+= "</ul>";
        document.getElementById(this.divID).innerHTML = out;
    }
    this.CreateUlTask_2 = function createList_Task_2(){
        var createNewUL = document.createElement("ul");
        createNewUL.id = "phoneList";
        document.getElementById(this.divID).appendChild(createNewUL);
        for(var i = 0; i < this.arr.length;i++) {

            var chunk = "<li>" + this.arr[i].age + "<br>" + this.arr[i].id + "<br><img src='"
                + this.arr[i].imageUrl + "'/><br>" + this.arr[i].name + "<br>" + this.arr[i].snippet + "</li>";

            document.getElementById("phoneList").innerHTML += chunk;
        }
    }
    this.CreateUlTask_3 = function createList_Task_3(){
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
    this.CreateUlTask_4 = function createList_Task_4(){
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
    this.GetTimeExecution =  function measureTimeExecution(testFunc){
        console.time("timer");
        for(var i = 0; i < 10; i++){
            testFunc();
            var getDiv = document.getElementById(this.divID);
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

}