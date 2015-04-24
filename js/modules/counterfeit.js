define([
    'modules/on'
], function(
    on
) {
    "use strict";

    var counterfeit = function(selectorOrElement) {

        var els = null;

        if (typeof selectorOrElement == "string")
            els = document.querySelectorAll(selectorOrElement);
        else
            els = selectorOrElement;

        return {
            on: on.bind(els),
            el: els
        };
    };

    return counterfeit;
});