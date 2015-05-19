
var temp = _.template($("#listTemplate").html());
var getPhones = temp({phones: phones});
 $("#phonesDiv").html(getPhones);




