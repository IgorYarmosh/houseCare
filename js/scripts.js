new WOW({
    animateClass: 'animate__animated'
}).init();



$('.burger_menu').on('click', function() {
    $('.popup_menu').toggleClass('popup_menu_active');
})

$('.popup_menu_close').on('click', function () {
    $('.popup_menu').removeClass('popup_menu_active');
})

$('.projects_card_additionally').on('click', function() {
    $('.new').toggleClass('new_d');
})

$('.text_pup0').css('display', 'none');
$('.left_1_1').css('display', 'none');

$('#left_1').on('click', function() {
    if ($('.text_pup0').css("display") == "none") $('.text_pup0').css('display', 'block');
    else $('.text_pup0').css('display', 'none');

    if ($('.left_1_1').css("display") == "none") $('.left_1_1').css('display', 'block');
    else $('.left_1_1').css('display', 'none');
    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})

$('#left_1_1').on('click', function() {
    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');

    $('#left_1_1').css('display', 'none');
    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');
})

$('.text_pup1').css('display', 'none');
$('.left_2_1').css('display', 'none');

$('#left_2').on('click', function() {
    if ($('.text_pup1').css("display") == "none") $('.text_pup1').css('display', 'block');
    else $('.text_pup1').css('display', 'none');

    if ($('.left_2_1').css("display") == "none") $('.left_2_1').css('display', 'block');
    else $('.left_2_1').css('display', 'none');

    $('.left_1_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');


})

$('#left_2_1').on('click', function() {
    $('.text_pup1').css('display', 'none');
    $('#left_2_1').css('display', 'none');

    $('.left_1_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})

$('.text_pup2').css('display', 'none');
$('.right_1_1').css('display', 'none');

$('#right_1').on('click', function() {
    if ($('.text_pup2').css("display") == "none") $('.text_pup2').css('display', 'block');
    else $('.text_pup2').css('display', 'none');

    if ($('.right_1_1').css("display") == "none") $('.right_1_1').css('display', 'block');
    else $('.right_1_1').css('display', 'none');

    $('.left_2_1').css('display', 'none');
    $('.left_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})

$('#right_1_1').on('click', function() {
    $('.text_pup2').css('display', 'none');
    $('#right_1_1').css('display', 'none');

    $('.left_2_1').css('display', 'none');
    $('.left_1_1_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup3').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})


$('.text_pup3').css('display', 'none');
$('.right_2_1').css('display', 'none');

$('#right_2').on('click', function() {
    if ($('.text_pup3').css("display") == "none") $('.text_pup3').css('display', 'block');
    else $('.text_pup3').css('display', 'none');

    if ($('.right_2_1').css("display") == "none") $('.right_2_1').css('display', 'block');
    else $('.right_2_1').css('display', 'none');


    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.left_1_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})

$('#right_2_1').on('click', function() {
    $('.text_pup3').css('display', 'none');
    $('#right_2_1').css('display', 'none');

    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.left_1_1').css('display', 'none');
    $('.right_3_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup4').css('display', 'none');
})




$('.text_pup4').css('display', 'none');
$('.right_3_1').css('display', 'none');

$('#right_3').on('click', function() {
    if ($('.text_pup4').css("display") == "none") $('.text_pup4').css('display', 'block');
    else $('.text_pup4').css('display', 'none');

    if ($('.right_3_1').css("display") == "none") $('.right_3_1').css('display', 'block');
    else $('.right_3_1').css('display', 'none');

    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.left_1_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
})

$('#right_3_1').on('click', function() {
    $('.text_pup4').css('display', 'none');
    $('#right_3_1').css('display', 'none');

    $('.left_2_1').css('display', 'none');
    $('.right_1_1').css('display', 'none');
    $('.right_2_1').css('display', 'none');
    $('.left_1_1').css('display', 'none');

    $('.text_pup0').css('display', 'none');
    $('.text_pup1').css('display', 'none');
    $('.text_pup2').css('display', 'none');
    $('.text_pup3').css('display', 'none');
})



$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
});


$('#order_btn').click(function() {
    $('.consultation')[0].scrollIntoView({behavior: "smooth"});
});

$('#construction_info_houses_btn').click(function() {
    $('.consultation')[0].scrollIntoView({behavior: "smooth"});
});

$('.projects_card_info_btn_consultation').click(function() {
    $('.consultation')[0].scrollIntoView({behavior: "smooth"});
});

$('.fon-image').magnificPopup({
    type: 'image'
})
//
$('#submit').click(function() {
    let name = $('#name');
    let tel = $('#tel');
    let checkbox1 = $('#chekbox1');
    let consultation_error1 = $('.consultation_error1');
    let consultation_error2 = $('.consultation_error2');
    let hasError = false;

    $('.error-input').hide();
    consultation_error1.css('border-color', 'black');
    consultation_error2.css('border-color', 'black');
    // checkbox1.prop("checked", true);

    if (!name.val()) {
        name.next().show();
        consultation_error1.css('border-color', 'red');
        hasError = true;
    }
    if (!tel.val()) {
        tel.next().show();
        consultation_error2.css('border-color', 'red');
        hasError = true;
    }

    if (!checkbox1.prop("checked")) {
        alert('Согласитесь с условиями, чтобы продолжить!')
        hasError = true;
    }

    if (!hasError) {
        $('.consultation_info_content').hide();
        $('.consultation_info_title').hide();
        $('.message').css('display', 'flex');
    }
})

$('#submit2').click(function() {
    $('.record_popup').css('display', 'block');
    $('.record_fon').css('display', 'block');
    $('.record_fon1').css('display', 'block');
})

$('#submit1').click(function() {
    let name_1 = $('#name_1');
    let tel_1 = $('#tel_1');
    let checkbox2 = $('#checkbox2');
    let record_error1 = $('.record_error1');
    let record_error2 = $('.record_error2');
    let hasError = false;

    $('.error-input1').hide();
    record_error1.css('border-color', 'black');
    record_error2.css('border-color', 'black');

    if (!name_1.val()) {
        name_1.next().show();
        record_error1.css('border-color', 'red');
        hasError = true;
    }
    if (!tel_1.val()) {
        tel_1.next().show();
        record_error2.css('border-color', 'red');
        hasError = true;
    }

    if (!checkbox2.prop("checked")) {
        alert('Согласитесь с условиями, чтобы продолжить!')
        hasError = true;
    }

    if (!hasError) {
        $('.record_popup_title').css('opacity', '0');
        $('.record_popup_content').css('opacity', '0');
        $('.record_popup_close').css('opacity', '1');
        $('.message2').css('display', 'flex');
        $('.record_fon').css('display', 'none');
        $('.record_fon1').css('display', 'none');
    }

})

$('.record_popup_close').click(function() {
    $('.record_popup').css('display', 'none');
    $('.record_info').css('opacity', '1');
    $('.footer').css('background', '#25252d');
    $('.record_fon').css('display', 'none');
    $('.record_fon1').css('display', 'none');
})









