$(document).ready(function(){
    $('.pyramid path').hover(function(){
        $(this).parent().addClass('active');
    }, function(){
        $(this).parent().removeClass('active');
    });

    $('.pyramid .content').hover(function(){
        $(this).parent().parent().addClass('active');
    }, function(){
        $(this).parent().parent().removeClass('active');
    });
});