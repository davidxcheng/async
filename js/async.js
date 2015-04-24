define([
    'modules/codePointConverter',
    'modules/profilePresenter'
], function(convert, profilePresenter) {

    var _showOctets = function() {
        var codePoints = document.getElementById('logo-img')
            .alt
            .split('')
            .map(function(letter) {
                return letter.charCodeAt(0);
            });

        var binary = codePoints.map(function(codePoint) {
            return  '<span>' + convert(codePoint).join(' ') + '</span>';
        });

        document.getElementById('octets').innerHTML = binary.join('');
    };

    var _bootstrapDevPresenter = function() {
        profilePresenter('[data-profile-id]');
    };

    return {
        init: function() {
            _showOctets();
            _bootstrapDevPresenter();
        }
    };
});