'use strict';

const contentView = {};

contentView.initIndexPage = function() {
  app.Content.all.forEach(function(content){
    $('#content-block').append(content.toHtml())
  });
};
