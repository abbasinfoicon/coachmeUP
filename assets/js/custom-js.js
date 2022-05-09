// startup-slider-slider
$(document).ready(function () {
    $("#testimonial-artical").owlCarousel({
        loop: true,
        rewind: true,
        autoplay: false,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 600,
        items: 1
    });

    // profil slider
    $("#votre-profil").owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        autoplay: false,
        margin: 20,
        dots: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    // profil slider
    $("#votre-profil-2").owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        autoplay: false,
        margin: 20,
        dots: false,
        smartSpeed: 580,
        items: 1
    });

    // profil slider
    $("#votre-profil-3").owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        autoplay: false,
        margin: 20,
        dots: false,
        smartSpeed: 560,
        items: 1
    });

    // profil slider
    $("#votre-profil-4").owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        autoplay: false,
        margin: 20,
        dots: false,
        smartSpeed: 540,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    // profil slider
    $("#historique-desslider").owlCarousel({
        loop: false,
        rewind: false,
        nav: false,
        autoplay: false,
        margin: 10,
        touchDrag: false,
        mouseDrag: false,
        dots: false,
        items: 1
    });
    $('#historique-desslider .owl-item').each(function (index) {
        $(this).attr('data-position', index);
    });

    // clickbt
    $(".clickbt").on("click", function () {
        var ths = $(this);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".dropContent").slideUp(200);
            setTimeout(function () {
                ths.siblings(".dropContent").next('.checkmail-box').fadeIn(200);
            }, 400);
        } else {
            $(".clickbt").removeClass("active");
            $(this).addClass("active");
            $(".dropContent").slideUp(200);
            $(this).siblings(".dropContent").slideDown(200);
            $(this).siblings(".dropContent").next('.checkmail-box').css('display', 'none');
        }

        $(this).closest(".media").siblings(".media").find('.checkmail-box').show();
    });

    // .crossMail
    $(".crossMail").on("click", function () {
        $(".dropContent").slideUp(200);
        $(".checkmail-box").fadeIn(200);
    });

    // mailNotifiaction
    $('.content-mail-media').css('width', $('.content-mail-media').width());
    $('.content-mail-media .clickbt').each(function () {
       $(this).addClass('onelinetitle');
       $(this).show();
    });


    // menu-icon
    $('.menu-icon').click(function () {
        $('.header .menu-icon').addClass('active');
        $('#sidenavMenu').addClass('active-nav');
        $('.sidenav-overlay').fadeIn('fast');
    });
    $('.closesidenav, .sidenav-overlay').click(function (event) {
        $('.header .menu-icon').removeClass('active');
        $('#sidenavMenu').removeClass('active-nav');
        $('.sidenav-overlay').fadeOut('fast');
    });

    // title-ministre
    if ($(window).width() <= 1024) {
        $('.title-ministre').prependTo($('.inline-center'));
    } else {
        $('.title-ministre').prependTo($('.aline-la-master .col-sm-8'));
    }
    $(window).resize(function () {
        // title-ministre
        if ($(window).width() <= 1024) {
            $('.title-ministre').prependTo($('.inline-center'));
        } else {
            $('.title-ministre').prependTo($('.aline-la-master .col-sm-8'));
        }
    });


    $('.caracteres-input').on('input propertychange', function () {
        CharLimit(this, 255);
        if ($(this).val() != '') {
            $('.caracteres-255').addClass('valactive');
        } else {
            $('.caracteres-255').removeClass('valactive');
        }
    });

    function CharLimit(input, maxChar) {
        var len = $(input).val().length;
        $('.caracteres-255').text(maxChar - len + ' caractères');

        if (len > maxChar) {
            $(input).val($(input).val().substring(0, maxChar));
            $('.caracteres-255').text(0 + ' caractères');
            $('.caracteres-255').css('color', '#721c24');
        } else {
            $('.caracteres-255').css('color', '');
        }
    }

    // logo-client
    $('.logo-client li').hover(function () {
        $(this).toggleClass('animated pulse');
    });

    $('.focus-placeholder .form-control').change(function () {
        if ($(this).val().length === 0) {
            $(this).closest('.form-group').find('label').removeClass('fill');
        } else {
            $(this).closest('.form-group').find('label').addClass('fill')
        }
    });
    $('.focus-placeholder .form-control').each(function () {
        if ($(this).val().length === 0) {
            $(this).closest('.form-group').find('label').removeClass('fill');
        } else {
            $(this).closest('.form-group').find('label').addClass('fill')
        }
    });

    // datepicker-13
    $("#datepicker-13").datepicker({
        changeMonth: true,
        changeYear: true,
        autoclose: true,
        yearRange: "1911:2001",
        orientation: "bottom right",
        onSelect: function (dateText) {
            $('.focus-placeholder .form-control').each(function () {
                if ($(this).val() == '' || $(this).val() === '') {
                    $(this).next('label').removeClass('fill')
                } else if ($(this).val() != '') {
                    $(this).next('label').addClass('fill')
                }
            });
        }
    });

    $.datepicker.regional['fr'] = {
        monthNames: ['Janvier', 'FÃ©vrier', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'AoÃ»t', 'Septembre', 'Octobre', 'Novembre', 'DÃ©cembre'],
        monthNamesShort: ['Jan', 'FÃ©v', 'Mar', 'Avr', 'Mai', 'Jun',
            'Jul', 'AoÃ»', 'Sep', 'Oct', 'Nov', 'DÃ©c'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    };
    $.datepicker.setDefaults($.datepicker.regional['fr']);


    // select-drop
    $('.openSelction-input').click(function () {
        $('.openSelction-select').slideUp(250);
        $(this).next('.openSelction-select').stop().slideToggle(250);
    });
    $('.openSelction-select li').click(function () {
        var txt = $(this).children('.title-li').text();
        $(this).closest('.select-drop').find('.form-control').val(txt);
        $(this).closest('.select-drop').find('.form-control').next('label').addClass('fill');
        $(this).closest('.openSelction-select').slideUp(250);

        // apportant-non
        if ($(this).hasClass('apportant-non')) {
            $('.apportant-startup').fadeOut('fast');
            $('.mes-expertise').fadeIn('fast');
        }
        if ($(this).hasClass('apportant-oui')) {
            $('.apportant-startup').fadeIn('fast');
            $('.mes-expertise').fadeOut('fast');
        }
    });

    // niveau-simpal
    $(".badge-notification").click(function () {
        $(".notifications-advisor").toggleClass('active');
    });

    // close-s
    $('html, body, .close-s').click(function () {
        $('.openSelction-select').slideUp(250);
        $(".notifications-advisor").removeClass('active');
    });

    $('.close-s,.openSelction-select,.select-drop,.badge-notification,.notifications-advisor').click(function (e) {
        e.isPropagationStopped();
        e.stopPropagation();
        e.isPropagationStopped()
    });

    // toggle-password
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $(this).closest('.form-group').find('input');
        if (input.attr("type") == "password") {
            input.prop("type", "text");
        } else {
            input.prop("type", "password");
        }
    });

    // quel-radio
    $('.quel-radio').change(function () {
        if ($(this).val() == 'Oui') {
            $('.quel-domaine').fadeIn('fast');
        } else if ($(this).val() == 'Non') {
            $('.quel-domaine').fadeOut('fast');
        }
    });
    if ($('.quel-radio:checked').val() == 'Oui') {
        $('.quel-domaine').fadeIn('fast');
    }
    if ($('.quel-radio:checked').val() == 'Non') {
        $('.quel-domaine').fadeOut('fast');
    }

    // niveau-simpal
    $("#niveau-simpal").click(function () {
        $(".openSelction").toggle();
    });

    // title-span
    $(".quelles-transmettre .title-span").click(function () {
        var otherssibl = $(this).closest('.col-md-6').siblings('.col-md-6');
        var txt = $(this).text();
        $(this).closest('.select-drop').find('.form-control').val(txt);
        $(this).closest('.select-drop').find('.form-control').next('label').addClass('fill');

        // active
        otherssibl.find('.title-span').removeClass('active');
        $(this).addClass('active');

        // merci-choisir
        otherssibl.find('.merci-choisir').slideUp(250);
        $(this).next('.merci-choisir').slideToggle(250);
        // keyboard-add
        otherssibl.find('.keyboard-add').slideUp(250);
        $(this).closest('.col-md-6').find('.keyboard-add').slideToggle(250);

    });

    // btn-okay-collapse
    $(".btn-okay-collapse").click(function () {
        var otherssibl = $(this).closest('.col-md-6').siblings('.col-md-6');
        // merci-choisir
        otherssibl.find('.merci-choisir').slideUp(250);
        $(this).closest('.col-md-6').find('.merci-choisir').slideToggle(250);
        // keyboard-add
        otherssibl.find('.keyboard-add').slideUp(250);
        $(this).closest('.col-md-6').find('.keyboard-add').slideToggle(250);
    });

    // souhaitez
    $('.form-group.souhaitez .openSelction-select').css('max-height', $(window).height() * 0.7);
    window.onresize = function (event) {
        $('.form-group.souhaitez .openSelction-select').css('max-height', $(window).height() * 0.7);
    }

    // videomodal
    $(document).find("#videomodal").on('shown.bs.modal', function () {
        jwplayer("videovoir").play(true);
    });
    $(document).find("#videomodal").on("hidden.bs.modal", function () {
        jwplayer("videovoir").pause(true);
    });

    // wpum_field_11 - date birth
    $('#datepicker-13').prop('maxlength', 10);
    $('#datepicker-13').bind('keyup keypress', function (event) {
        var code = event.keyCode || event.which;
        if (code != 8) {
            var valuebirthday = $(this).val();
            if (valuebirthday.length == 2 || valuebirthday.length == 5) {
                $(this).val($(this).val() + '/');
            }
        }
    });

    // equalheight
    equalheight = function (container) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    // makeResizable
    function makeResizable(element) {
        if (element && $(element).length) {
            var $el = $(element);
            var elHeight = $el.outerHeight();
            var elWidth = $el.outerWidth();

            var $wrapper = $el.parent();

            var starterData = {
                size: {
                    width: $wrapper.width(),
                    height: $wrapper.height()
                }
            }
            var scale = Math.min(
                starterData.size.width / $el.outerWidth(),
                starterData.size.height / $el.outerHeight()
            );
            if (scale > 1) {
                scale = 1;
            }

            $el.css({
                transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
                'opacity': '1'
            });
        }
    }

    $(document).ready(function () {
        makeResizable('#very-specific-design');
    });
    $(window).resize(function () {
        makeResizable('#very-specific-design');
    });

    // marketplace-section
    $('.marketplace-section .card-details').each(function () {
        $(this).css({'padding-bottom': $(this).find('.ftr-key').innerHeight() + 15});
    });

    if ($(window).width() >= 1200) {
        window.onload = function (e) {
            equalheight('.marketplace-section .col-md-4');
            setTimeout(function () {
                $('.marketplace-section .card-details').each(function () {
                    $(this).css({'height': '100%'});
                });
            }, 600);
        };
    }

    $('.pagination-historique a').not($('.pagination-historique a img').parent('a')).click(function (i) {
        $('.pagination-historique a').removeClass('active');
        $(this).addClass('active');

        // dataposition
        var dataposition = $(this).index() - 1;
        $('#historique-desslider').trigger('to.owl.carousel', dataposition);
    })

    // prev-his
    $('.prev-his').click(function (i) {
        $('#historique-desslider').trigger('prev.owl.carousel', [300]);
    });
    // next-his
    $('.next-his').click(function (i) {
        $('#historique-desslider').trigger('next.owl.carousel', [300]);
    });


});


