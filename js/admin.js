$(document).ready(function () {
    $('.admin_page nav .opening .admin_menu_link').click(function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('opened')) {
            $('.admin_page nav .opening').removeClass('opened');
            $(this).parent().addClass('opened');
        }
        else {
            $(this).parent().removeClass('opened');
        }
    });

    $('.photos-abs-wrapp').css({
        'max-height': $('.rel-wr-photoos').width()+'px'
    });

    $(window).resize(function(){
        $('.photos-abs-wrapp').css({
            'max-height': $('.rel-wr-photoos').width()+'px'
        });
    });
});