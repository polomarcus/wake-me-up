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

    setLangHTMLTag(i18nService.use());
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

  /**
   * http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element
   * set attribut lang of the HTML for accessibility
   * @param {string} value
   */
  function setLangHTMLTag(value){
    document.querySelector('html').setAttribute('lang', value);
  }

  return new SeoService();
  });
