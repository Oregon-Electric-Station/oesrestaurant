var isOpen = false;
function closeCanvas(){
    $(".nav-icon").removeClass("active");
    $(".sidebar-nav").removeClass("active");
    $(".wrapper").removeClass("push");
    $(".canvas-wrap").removeClass("push");
    $("#big-video-wrap").removeClass("push");
    $(".canvas-wrap").removeClass("noscroll");
    $("body").removeClass("noscroll");
    isOpen = false;
}
$('.nav-icon').click(function(){
    if (isOpen == false) {
        $(".nav-icon").addClass("active");
        $(".sidebar-nav").addClass("active");
        $(".wrapper").addClass("push");
        $(".canvas-wrap").addClass("push");
        $("#big-video-wrap").addClass("push");
        $(".canvas-wrap").addClass("noscroll");
        $("body").addClass("noscroll");
        isOpen = true;
    }
    else {
        closeCanvas();
    }
});
$('.more').click(function(){
    $(".gc-steps").toggleClass("opened");
});
$(".ecwid-productBrowser-head").fadeOut();

$(window).resize(closeCanvas);
$('.canvas-wrap').click(closeCanvas);

$(".toggle-drop").click(function(){
    $(".dropdown-mask").toggleClass('open');
    $(".toggle-drop").toggleClass('active');
});

$(".notification-closer").click(function(){
    $(".notification-box").toggleClass('closed');
});
$(".pay-btn").click(function() {
        // $(".store-front").toggleClass("displayed");
        $(".store-front").slideDown(500);
});

$(".toggle-reserve").click(function(){
    $(".reserve-form-mask").toggleClass('open');
    $(".toggle-reserve").toggleClass('active');
});
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
// $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
    
//     // $('a').each(function () {
//     //     $(this).removeClass('active');
//     // })
//     // $(this).addClass('active');
  
//     var target = this.hash,
//         menu = target;
//     $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 2000, 'swing', function () {
//         window.location.hash = target;
//         $(document).on("scroll", onScroll);
//     });
// });

$(function(){
    var menuNavTop = $('#menu-bar').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > menuNavTop ) {
            $(".fixed-top.menu").removeClass("move-down").addClass("move-up");
            // $('#menu-bar').addClass("stuck");
        } else {
            // $('#menu-bar').removeClass("stuck");
            $(".fixed-top.menu").removeClass("move-up").addClass("move-down");
        }
        if( $(window).scrollTop() > 500 ) {
            $(".fixed-top.reserve").removeClass("move-down").addClass("move-up");
            // $('#menu-bar').addClass("stuck");
        } else {
            // $('#menu-bar').removeClass("stuck");
            $(".fixed-top.reserve").removeClass("move-up").addClass("move-down");
        }
    });
});

$( window ).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".homer-top").addClass("std-header");
    } else {
        $(".homer-top").removeClass("std-header");
    }
});