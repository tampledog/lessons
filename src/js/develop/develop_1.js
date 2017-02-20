


$(document).ready(function(){
    $('.tab').click(function () {
        var ind = $(this).index();
        console.log(ind);
        $('.item').removeClass('active');
        $('.tab').removeClass('active');
        $('.item').eq(ind).addClass('active');
        $(this).addClass('active');

    });
});

$(window).load(function(){

    $('.plus').click(function () {
        $('li').removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.content').addClass('active');
    });
});

$(window).resize(function(){

});