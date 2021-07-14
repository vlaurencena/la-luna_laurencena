$(document).ready(function() {
    $("#navbar__boton").click(function() {
        $(".seccionActiva").toggle();
        $(this).find("i.bi").toggleClass("bi-list");
        $(this).find("i.bi").toggleClass("bi-x");
    });
    $(".footer__acordeon__boton").click(function() {
        $(".footer__acordeon__boton").find("i.bi").addClass("bi-chevron-down");
        $(".footer__acordeon__boton").find("i.bi").removeClass("bi-chevron-up");
        $(this).find("i.bi").toggleClass("bi-chevron-down");
        $(this).find("i.bi").toggleClass("bi-chevron-up");

    });
    chequearAncho();
});

function chequearAncho() {
    if ($(window).width() >= 992) {
        // DESKTOP
        //console.log("soy desktop");
        $(".collapse").addClass("show");
        $(".footer__acordeon__boton").prop("disabled", true);
    } else if ($(window).width() >= 768 && $(window).width() < 992) {
        //TABLET
        //console.log("soy tablet");
        $(".collapse").removeClass("show");
        $(".footer__acordeon__boton").prop("disabled", false);
    } else {
        //MOBILE
        //console.log("soy mobile");
        $(".seccionActiva").addClass("show");
        $(".collapse").removeClass("show");
        $(".footer__acordeon__boton").prop("disabled", false);
    };

};

$(window).resize(function() {
    chequearAncho();
});