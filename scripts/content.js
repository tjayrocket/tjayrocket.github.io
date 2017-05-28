'use strict';

var app = app || {};

(function(module){
  function Content (contentDataObj) {
    this.title = contentDataObj.title;
    this.image = contentDataObj.image;
    this.textBlock = contentDataObj.textBlock;
    this.sourceUrl = contentDataObj.sourceUrl;
  }

  Content.all = [];

  Content.prototype.toHtml = function() {
    var template = $('#div-content').html();
    var templatePlacement = Handlebars.compile(template);
    return templatePlacement(this);
  };

  Content.loadAll = function(contentData) {

    contentData.forEach(function(ele) {
      Content.all.push(new Content(ele));
    })
  }

  Content.fetchAll = function() {
    if (localStorage.contentData) {
      Content.loadAll(JSON.parse(localStorage.contentData));
      contentView.initIndexPage();
    } else {
      $.getJSON('/data/contentMain.json')
      .then(function(contentData) {
        Content.loadAll(contentData);
        localStorage.contentData = JSON.stringify(contentData);
        contentView.initIndexPage();
      }, function(err) {
        console.error(err);
      });
    }
  }
  module.Content = Content;
})(app);
