$(document).ready(function() {
    // NAV BAR
    $("#navbar__boton").click(function() {
        $(".seccionActiva").toggle();
        $(this).find("i.bi").toggleClass("bi-list");
        $(this).find("i.bi").toggleClass("bi-x");
    });
    //FOOTER 
    $(".footer__acordeon.btn").click(function() {
        $(".footer__acordeon.btn").find("i.bi").addClass("bi-chevron-down");
        $(".footer__acordeon.btn").find("i.bi").removeClass("bi-chevron-up");

        if ($(this).find("i").hasClass("bi-chevron-down")) {
            $(this).find("i").removeClass("bi-chevron-down");
            $(this).find("i").addClass("bi-chevron-up");
        } else {
            $(this).find("i").removeClass("bi-chevron-up");
            $(this).find("i").addClass("bi-chevron-down");
        }
    });
    chequearAncho();
    //EXPLORACIÓN > FLIP-CARD
    if ($(window).width() < 992) {
        $(".flip-card").click(function() {
            $(this).find(".flip-card-front").toggle();
            $(this).find(".flip-card-back").toggle();
        });
    };
});

function chequearAncho() {
    if ($(window).width() >= 992) {
        // DESKTOP
        //console.log("soy desktop");
        $(".footer__acordeon").prop("disabled", true);
    } else if ($(window).width() >= 768 && $(window).width() < 992) {
        //TABLET
        //console.log("soy tablet");
        $(".footer__acordeon").prop("disabled", false);
    } else {
        //MOBILE
        //console.log("soy mobile");
        $(".footer__acordeon").prop("disabled", false);
    };
};
$(window).resize(function() {
    chequearAncho();
    //EXPLORACIÓN > FLIP-CARD
    if ($(window).width() < 992) {
        $(".flip-card").find(".flip-card-back").hide();
        $(".flip-card").click(function() {
            $(this).find(".flip-card-front").toggle();
            $(this).find(".flip-card-back").toggle();
        });
    };
    if ($(window).width() >= 992) {
        $(".flip-card").find(".flip-card-front").show();
        $(".flip-card").find(".flip-card-back").show();
    }
});