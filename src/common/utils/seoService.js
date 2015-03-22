var app = angular.module('wakeMeUp.services');

app.factory('seoService', function ($document, i18nService) {
  var SeoService = function() {};

  SeoService.prototype.init = function init(){
    //Title
    i18nService.translate('WEBSITE.TITLE')
      .then(function(favorite){
        i18nService.translate('MENU.WEBSITE.NAME').
          then(function(title){
          setTitle(title + ' | ' + favorite);
        });
      });

    //Meta description
    i18nService.translate('WEBSITE.DESCRIPTION')
      .then(function(value){
        setTitle(value);
      },
    function(err){
      console.log("err seo");
    });
  };

  /**
   * set meta description
   */
  function setMetaDescription(value){
    document.querySelector('meta[name="description"]').setAttribute('content', value);
  }

  /**
   * set the head title
   */
  function setTitle(value){
    $document.prop('title', value);
  }

  return new SeoService();
  });
