$(document).ready(function() {
    // NAV BAR
    $("#navbar__boton").click(function() {
        $(".seccionActiva").toggle();
        $(this).find("i.bi").toggleClass("bi-list");
        $(this).find("i.bi").toggleClass("bi-x");
    })

    //EXPLORACIÓN > FLIP-CARD
    $(".flip-card").click(function() {
        $(this).find(".flip-card-front").toggle();
        $(this).find(".flip-card-back").toggle();
    });

    chequearAncho();
});

function chequearAncho() {
    if ($(window).width() >= 992) {
        // DESKTOP
        $(".footer__acordeon").prop("disabled", true);
    } else if ($(window).width() >= 768 && $(window).width() < 992) {
        //TABLET
        $(".footer__acordeon").prop("disabled", false);
    } else {
        //MOBILE
        $(".footer__acordeon").prop("disabled", false);
    };
};

$(window).resize(function() {
    chequearAncho();
});