	$(".nav-icon").click(function(){
        $(".nav-icon").toggleClass("active");
        $(".sidebar-nav").toggleClass("active");
        $(".canvas-wrap").toggleClass("push");
    });

	// $(".toggle-room-nav").click(function(){
	//     $(".option-dropdown").slideToggle();
	// });

	$(".toggle-drop").click(function(){
	    $(".dropdown-mask").toggleClass('open');
	    $(".toggle-drop").toggleClass('active');
	});

    $(".notification-closer").click(function(){
        $(".notification-box").toggleClass('closed');
    });

	$(".toggle-reserve").click(function(){
	    $(".reserve-form-mask").toggleClass('open');
	    $(".toggle-reserve").toggleClass('active');
	});


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    // $('a').each(function () {
    //     $(this).removeClass('active');
    // })
    // $(this).addClass('active');
  
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 2000, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

// $( window ).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".fixed-top").fadeOut();
//     } else {
//         $(".fixed-top").fadeIn();
//     }
// });