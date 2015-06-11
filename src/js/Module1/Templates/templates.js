this["JST"] = this["JST"] || {};

this["JST"]["src/js/Module1/Views/listTemplateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<script type="text/template" id="listTemplate">\r\n\r\n    <ul id = "list">\r\n        ';
 for (var i=0; i< items.length; i++) { ;
__p += '\r\n        <li>' +
((__t = (items[i].age )) == null ? '' : __t) +
'<br>\r\n            ' +
((__t = (items[i].name)) == null ? '' : __t) +
'<br>\r\n            ' +
((__t = (items[i].id)) == null ? '' : __t) +
'<br>\r\n            <img src="' +
((__t = (items[i].imageUrl)) == null ? '' : __t) +
'"/><br>\r\n            ' +
((__t = (items[i].snippet)) == null ? '' : __t) +
'<br>\r\n            <p>Price: ' +
((__t = (items[i].price)) == null ? '' : __t) +
'</p>\r\n            <button id="' +
((__t = (items[i].id)) == null ? '' : __t) +
'" class="buyButton btn btn-success" type="submit">Buy</button>\r\n        </li>\r\n        ';
 } ;
__p += '\r\n\r\n    </ul>\r\n</script>';

}
return __p
};