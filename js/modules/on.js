define([], function() {
    "use strict";

    var on = function(event, cb) {
        
        if (this == null)
            return;

        if (this instanceof HTMLElement) {
            this.addEventListener(event, cb);
        }
        else if (this instanceof NodeList) {
            for (var i = 0; i < this.length; i++) {
                this[i].addEventListener(event, cb);
            }
        }
    };

    return on;
});