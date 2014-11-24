function infiniteLoop(time){
    function f(){
        $('.rg-image-nav-next').click() // click the next button
        timer=setTimeout(f,time)
    }
    f()
    $(window).one('click',function(){
        clearTimeout(timer) // get me out of here
    })
}
infiniteLoop(6000);