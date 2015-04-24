define([], function() {
    "use strict";

    var addClass = function(className) {
        
        if (this == null || !document.body.classList)
            return;

        if (this instanceof HTMLElement) {
            this.classList.add(className);
        }
        else if (this instanceof NodeList) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.add(className);
            }
        }
    };

    var removeClass = function(className) {
        if (this == null || !document.body.classList)
            return;

        if (this instanceof HTMLElement) {
            this.classList.remove(className);
        }
        else if (this instanceof NodeList) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.remove(className);
            }
        }
    };

    return {
        addClass: addClass,
        removeClass: removeClass
    };
});