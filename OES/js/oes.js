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
    $(window).resize(closeCanvas);
    $('.canvas-wrap').click(closeCanvas);

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