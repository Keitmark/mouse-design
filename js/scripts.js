$(document).ready(function () {

    //страница signUp-2.html
    $('.label-wr').mousedown(function () {
        $(this).addClass('scaled');
        //alert('ok');
    });
    $('.label-wr').mouseup(function () {
        $(this).removeClass('scaled');
    });
    //страница signUp-2.html

    //Открытие левой хуйни

    $(".nav-button").on("click", function (e) {
        e.preventDefault();
        $("body").addClass("has-active-menu");
        $(".mainWrapper").addClass("has-push-left");
        $(".nav-holder-3").addClass("is-active");
        $(".mask-nav-3").addClass("is-active")
    });
    $(".menu-close, .mask-nav-3").on("click", function (e) {
        e.preventDefault();
        $("body").removeClass("has-active-menu");
        $(".mainWrapper").removeClass("has-push-left");
        $(".nav-holder-3").removeClass("is-active");
        $(".mask-nav-3").removeClass("is-active")
    });


                       
                            $('#modal-pick-artist').modal('show');
                  
             
    ///Открытие левой хуйни






    //страница shows.html раскоментить
    /*
    var hu = $(".current-slider").ionRangeSlider({
        min: 0,
        max: 300,
        from: 150,
        type: "single",
        hide_min_max: true,
        postfix: " km",
        grid: false,
        grid_num: 5,
        onChange: function(){
           
        }
    });
    $('.slider-modal-wr').slick({
            dots: false,
            arrows: true,
              infinite: true,
              slidesToShow: 1

        });
        */
    //открытие модалки
    //    $('.description').click(function(){
    //        $('#modal-slider').modal('show');
    //    });

    ///страница shows.html

    //страница profile-venue




    $('.galary-main-wrapp').each(function () {
        var pic = $(this),
            getItems = function () {
                var items = [];
                pic.find('.for-galary-item').each(function () {
                    var href = $(this).attr('data-hreff'),
                        size = $(this).data('size').split('x'),
                        width = size[0],
                        height = size[1];
                    var item = {
                        src: href,
                        w: width,
                        h: height
                    }
                    items.push(item);
                });
                return items;
            }
        var items = getItems();
        var pswp = $('.pswp')[0];
        pic.on('click', '.one-block', function (event) {
            event.preventDefault();
            var index = $(this).index();
            var options = {
                index: parseInt(index),
                bgOpacity: 1,
                showHideOpacity: true
            }
            // Initialize PhotoSwipe






            options.history = false;

            options.getThumbBoundsFn = function (index) {


                var thumbnail = document.querySelectorAll('.for-galary-item')[index];


                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

                var rect = thumbnail.getBoundingClientRect();


                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };


            }


            console.log(options);
            var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });

    ///страница profile-venue

    //страница profile-artist
   



    ///страница profile-artist


    //страница create-event-1

    //переносим внутриность функции на ангулар click
    $(".artist-modal-open .plus").click(function () {
        $('#modal-pick-artist').modal('show');
    });


    $(".send-request-modal").click(function () {
        $('#modal-send-request').modal('show');
    });


    //range slider http://ionden.com/a/plugins/ion.rangeSlider/index.html документация
    var hu_2 = $(".current-slider").ionRangeSlider({
        min: 0,
        max: 100000,
        from: 20000,
        type: "single",
        hide_min_max: false,
        prefix: "$ ",
        grid: false,
        prettify_enabled: true,
        prettify_separator: ',',
        grid_num: 5,
        onChange: function () {
            
        }
    });

    var hu_3 = $(".current-slider-price-venue").ionRangeSlider({
        min: 0,
        max: 100000,
        from: 20000,
        type: "single",
        hide_min_max: false,
        prefix: "$ ",
        grid: false,
        prettify_enabled: true,
        prettify_separator: ',',
        grid_num: 5,
        onChange: function () {

        }
    });

    var hu_4 = $(".current-slider-capacity-venue").ionRangeSlider({
        min: 0,
        max: 100000,
        from: 10000,
        type: "single",
        hide_min_max: false,

        grid: false,
        prettify_enabled: true,
        prettify_separator: ',',
        grid_num: 5,
        onChange: function () {

        }
    });


    



    ///страница create-event-1
    
    
    //страница events-page
        
    
    $('.abs-analytics').click(function(){
        $('#modal-analytics').modal('show');
        
        
    })
    
    
    
    
    
    ///страница events-page
    
    //страница add-artist
    
    
    //хреновая документация, но какая есть https://kolber.github.io/audiojs/
    
    
 
    //var as = audiojs.createAll();
   
    //слайдер аудио, в слайде 12 песен
    $('.slider-audio-wrapp').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1

    });
    
    
    
    $('.slider-2-init').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
         responsive: [
            {
              breakpoint: 1301,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
               
              }
            }
         ]

    });
    
    
     $('.slider-3-init').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
         responsive: [
            {
              breakpoint: 1301,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
               
              }
            }
         ]
         

    });
    $('.slider-4-init').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 2,
         responsive: [
            {
              breakpoint: 1301,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
               
              }
            }
         ]

    });
    
    ///страница add-artist
   
    
    
    
    //страница show-datails-1
    
    $('.nav-iframe-slider-wrapp .one-slide').click(function(){
        $('.nav-iframe-slider-wrapp .one-slide').removeClass('active');
        $(this).addClass('active');
        $('.iframe-slider-wrapp').slick('slickGoTo',$(this).index());
        return;
       
    })
    
    
     $('.iframe-slider-wrapp').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        speed: 200

    });
    $('.iframe-slider-wrapp').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.nav-iframe-slider-wrapp .one-slide').removeClass('active');
        $('.nav-iframe-slider-wrapp .one-slide').eq(nextSlide).addClass('active');
       
    });
    



    /* settings */

    $('.opening').click(function(e) {
        e.preventDefault();
        if (!$(this).parents('li').hasClass('opened')) {
            $(this).parents('li').addClass('opened');
            $(this).parents('li').find('.submenu').slideDown();
        }
        else {
            $(this).parents('li').find('.submenu').slideUp();
            $(this).parents('li').removeClass('opened');
        }
    });

    $('.card_number input').keyup(function(e) {
        if ($(this).val().length == 4) {
            $(this).next().focus();
        }
        else if ($(this).val().length == 0 && e.which == 8) {
            $(this).prev().focus();
        }
    });

    $('.feedback_form .stars span').mouseover(function(e) {
        var num = $(this).index();
        $('.feedback_form .stars span').each(function(e) {
            if ($(this).index() <= num) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });
    });
    $('.feedback_form .stars span').mouseout(function(e) {
        if (!$('.feedback_form .stars').hasClass('choosed'))
            $('.feedback_form .stars span').removeClass('active');
    });
    $('.feedback_form .stars span').click(function(e) {
        var num = $(this).index();
        if (!$('.feedback_form .stars').hasClass('choosed')) {
            $('.feedback_form .stars').addClass('choosed');
        }
        $('#rate_star').val(parseInt(num)+1);
    });

    $('#change_personal_phone_number').click(function() {
        $('#modal_change_phone').modal('show');
    });

    $('#update_personal_phone').click(function(e) {
        e.preventDefault();
        $('#modal_change_phone').modal('hide');
        $('#modal_change_phone_ver').modal('show');
    });

    $('#wrong_number').click(function(e) {
        e.preventDefault();
        $('#modal_change_phone_ver').modal('hide');
        $('#modal_change_phone').modal('show');
    });

    $('#validate_personal_phone_code').click(function(e) {
        e.preventDefault();
        $('#modal_change_phone_ver').modal('hide');
        $('#success_change_phone').modal('show');
    });
});





