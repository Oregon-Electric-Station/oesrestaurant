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