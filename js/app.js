/**
 * Created by Brad on 1/23/2016.
 */
$(function() {
    'use strict';
    window.sr = ScrollReveal({
        duration: 500,
        mobile: true
    });

    sr.reveal('.sidebar-link', {
        origin: 'left',
        rotate: { x : 0, y : 0, z : -90 }
        });

    sr.reveal('.content-container', {
        origin: 'bottom'
    });

    $('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 32,
        fontRatio : 30
    });

});