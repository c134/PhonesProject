var itemListModule = (function () {
    'use strict';
    var _items = [];
    //var _template = _.template($('#listTemplate').html());
    var itemsCopy = _.map(_items, _.clone);
    var _template = JST['js/Module1/Views/listTemplateView.html'](itemsCopy);
    var _rootElement = $('#phonesDiv');
    var _addEvents = function () {
        _rootElement.on('click', '.buyButton', function () {
            var buttonId = $(this).attr('id');
            var result = _.findWhere(_items, {id: buttonId});
            var purchase = {
                id: result.id,
                name: result.name,
                price: result.price
            };
            cartCollectionModule.addItem(purchase);
            cartListModule.render();
        });
    };
    return {
        //_template: JST['js/Module1/Views/listTemplateView.html'](),
        //_template: JST['js/Module1/Templates/templates.js'](),
        initialize: function (items) {

            _items = items;
            _addEvents();
            this.render();
        },
        render: function () {
            //var itemsCopy = _.map(_items, _.clone);
            var rendTemplate = _template({items: itemsCopy});
            _rootElement.html(rendTemplate);
        }

    };
}());
//function createTemplate(templatePath, data) {
//    var templateString = window['JST'][templatePath](data);
//    return templateString;
//}
itemListModule.initialize(phones);