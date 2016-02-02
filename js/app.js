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

    var circlePhoto = $('.circular');

    //$('#resume').hover(function() {
    //    circlePhoto.css('background', "url(img/square-face-resume.jpg) no-repeat center")
    //        .css('background-size', "cover");
    //});

    $("#resume").on("mouseenter", function(){
        circlePhoto.css('background', "url(img/square-face-resume.jpg) no-repeat center")
            .css('background-size', "cover");
    }).on("mouseleave", function(){
        circlePhoto.css('background', "url(img/square-face.jpg) no-repeat center")
            .css('background-size', "cover");
    });

    $("#github").on("mouseenter", function(){
        circlePhoto.css('background', "url(img/square-face-github.jpg) no-repeat center")
            .css('background-size', "cover");
    }).on("mouseleave", function(){
        circlePhoto.css('background', "url(img/square-face.jpg) no-repeat center")
            .css('background-size', "cover");
    });

    $("#linkedin").on("mouseenter", function(){
        circlePhoto.css('background', "url(img/square-face-linkedin.jpg) no-repeat center")
            .css('background-size', "cover");
    }).on("mouseleave", function(){
        circlePhoto.css('background', "url(img/square-face.jpg) no-repeat center")
            .css('background-size', "cover");
    });

});