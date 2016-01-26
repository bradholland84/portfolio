/**
 * Created by Brad on 1/23/2016.
 */
$(function() {
    'use strict';
    window.sr = ScrollReveal({
        origin: 'left',
        duration: 500,
        rotate: { x : 0, y : 0, z : -90 },
        mobile: true
    });

    $('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 40,
        fontRatio : 30
    });

    sr.reveal('.sidebar-link');


});