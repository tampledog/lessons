


$(document).ready(function(){
    $('.tab').click(function () {
        var ind = $(this).index();
        console.log(ind);
        $('.item').removeClass('active');
        $('.tab').removeClass('active');
        $('.item').eq(ind).addClass('active');
        $(this).addClass('active');

    });

    $('.plus').click(function () {
        if ($(this).closest('li').hasClass('active')) {
        $(this).closest('li').removeClass('active');
            $(this).closest('li').find('.cont').slideUp();
        } else {
            $(this).closest('li').addClass('active');
            $(this).closest('li').find('.cont').slideDown();
        }
    });


});

$(window).load(function(){


});

$(window).resize(function(){

});