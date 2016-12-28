"use strict";

var $ = require('jquery');

var App = {
  items: ['Learn Brunch', 'Apply to my projects', '...','Profit'],
  init: function(){
    var tmpl = require('views/list');
    var html = tmpl({ items: App.items });
    $('body').append(html);
  }
}

module.exports = App;
