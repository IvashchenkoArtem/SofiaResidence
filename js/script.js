
$(document).ready(function () {
    $('.slider-gallery').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // infinite: true,
        speed: 1500,

        // dots: false,
        // vertical: true,
        // swipe: slick,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autplay: false,
                    dots: false
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.sl').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]
    });
});

let map;
function initMap() {
    let dote = { lat: 50.4459781, lng: 30.6116999 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.4459781, lng: 30.6116999 },
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: dote,
        map: map,
    });
}

$(function () {
    $('.js-form-toggle').on('click', function () {
        $('.js-form-toggle').toggleClass('close-form--open');
        $('.js-form').toggleClass('hidden--open');
    });
});

showInfo = () => {
    document.querySelector('.js-user-info').classList.remove('user-info--hidden');
}

hideInfo = () => {
    document.querySelector('.js-user-info').classList.add('user-info--hidden');
}

// $('form').submit(function (event) {
//     event.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "mailer/mail.php",
//         data: $(this).serialize()
//     }).done(function () {
//         $(this).find("input").val("");
//         alert("Спасибо за заявку)");
//         $("form").trigger("reset");
//     });
//     return false;
// });

$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо за заявку :)");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});