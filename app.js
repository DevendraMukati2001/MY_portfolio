$('document').ready(function(){
    $(".logo").click(function() {
        $('html,body').animate({
            scrollTop: $(".home-section").offset().top+(-70)},
            'slow');
    });

    $("#item1").click(function() {
        $('html,body').animate({
            scrollTop: $(".home-section").offset().top+(-70)},
            'slow');
    });

    $("#item2").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-section").offset().top+(+40)},
            'slow');
    });

    $("#item3").click(function() {
        $('html,body').animate({
            scrollTop: $(".project-section").offset().top+(-25)},
            'slow');
    });

    $(".probtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".project-section").offset().top+(-25)},
            'slow');
    });

    $("#item4").click(function() {
        $('html,body').animate({
            scrollTop: $(".tech-section").offset().top+(-25)},
            'slow');
    });

    $("#item5").click(function() {
        $('html,body').animate({
            scrollTop: $(".skills-section").offset().top+(-25)},
            'slow');
    });

    $("#item6").click(function() {
        $('html,body').animate({
            scrollTop: $(".contact-section").offset().top+(-25)},
            'slow');
    });
})
