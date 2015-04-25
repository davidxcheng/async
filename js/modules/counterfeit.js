define([
    'modules/on',
    'modules/css-class',
    'modules/inner-html'
], function(
    on,
    cssClass,
    html
) {
    "use strict";

    var counterfeit = function(selectorOrElement) {

        var els = null;

        if (typeof selectorOrElement == "string")
            els = document.querySelectorAll(selectorOrElement);
        else
            els = selectorOrElement;

        return {
            el: els,
            on: on.bind(els),
            addClass: cssClass.addClass.bind(els),
            removeClass: cssClass.removeClass.bind(els),
            html: html.bind(els)
        };
    };

    return counterfeit;
});