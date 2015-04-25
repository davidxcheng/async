define([], function() {
    "use strict";

    var html = function(content) {

        if (this == null)
            return;

        if (arguments.length == 0)
            return _getInnerHtml(this);

        _setInnerHtml(this, content);
    };

    var _getInnerHtml = function(el) {
        
        if (el instanceof HTMLElement)
            return el.innerHTML;

        if (el instanceof NodeList)
            // returning only the inner html of the first element is
            // is consistent with jQuery's api
            return el[0].innerHTML;
    };

    var _setInnerHtml = function(el, content) {

        if (el instanceof HTMLElement)
            el.innerHTML = content;
        else if (el instanceof NodeList) {
            for (var i = 0; i < el.length; i++) {
                el[i].innerHTML = content;
            }
        }
    };

    return html;
});