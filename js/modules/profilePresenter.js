define([
    'modules/counterfeit'
], function(
    $
) {
    "use strict";

    var profilePresenter = function(selector) {

        var elProfile = document.querySelector('#profile'),
            profileJh = document.querySelector('#profile-jh');

        $(selector).on('click', function(e) {
            e.preventDefault();
            
            var profileKey = e.target.dataset.profileId;

            elProfile.innerHTML = profileJh.innerHTML;
        });
    }

    return profilePresenter;
});