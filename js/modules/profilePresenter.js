define([
    'modules/counterfeit'
], function(
    $
) {
    "use strict";

    var profiles = {};

    profiles.jh = { name: 'Jonnie Hedkvist', pitch: '<p>Jobbat som webbutvecklare i ca 3 år och har sina främsta färdigheter inom .NET MVC, JavaScript, HTML och CSS. Bland de nöjda kunderna finns t&nbsp;ex <a href="http://www.taskrunner.se">taskrunner.se</a> och <a href="https://nutris.se">nutris.se</a></p>' };
    profiles.dc = { name: 'David Cheng', pitch: '<p>Bred bakgrund efter drygt 10 år som utvecklare men har sin spets inom e-handel.</p>' };
    profiles.kb = { name: 'Karl Böhlmark', pitch: '<p>Lika mycket arktiekt som skicklig kodare. Har bl a varit med och byggt en betalningslösning, lösningar för både live- och videostreaming, e-handelssajt etc.</p>' };
    profiles.am = { name: 'Anders Martini', pitch: '<p>Junior webbutvecklare med en mycket lovande utvecklingskurva tack vare orädd inställning och stor aptit på kodande! Har senaste tiden jobbat med kodbaser som bygger på .NET MVC, JavaScript, HTML och CSS.</p>' };

    var elProfileName = document.getElementById('profile-name'),
        elProfilePitch = document.getElementById('profile-pitch')

    var _showProfile = function(profile) {
        var $profileWrapper = $('.profile-wrapper');

        $profileWrapper.removeClass('behold');
        elProfileName.innerHTML = profile.name;
        elProfilePitch.innerHTML = profile.pitch;
        $profileWrapper.addClass('behold');
    };

    var profilePresenter = function(selector) {

        $(selector).on('click', function(e) {
            e.preventDefault();

            $('.avatar-active').removeClass('avatar-active');
            $(e.target).addClass('avatar-active');
            
            var key = e.target.dataset.profileId,
                profile = profiles[key];

            _showProfile(profile);
        });
    }

    return profilePresenter;
});