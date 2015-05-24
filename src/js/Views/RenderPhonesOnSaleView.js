var RenderPhonesOnSale = {
 render: function (divId, tempId, arr) {
  this.divId = divId;
  this.tempId = tempId;
  this.arr = arr;
  var executeTemplate = _.template($("#" + this.tempId).html());
  var rendTemplate = executeTemplate({phones: this.arr});
  $("#" + this.divId).html(rendTemplate);
 }
};
RenderPhonesOnSale.render("phonesDiv","listTemplate",phones);



