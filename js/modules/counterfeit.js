define([
    'modules/on',
    'modules/css-class',
], function(
    on,
    cssClass
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
        };
    };

    return counterfeit;
});