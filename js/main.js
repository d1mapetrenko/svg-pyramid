$(document).ready(function(){
    $('.pyramid path').hover(function(){
        $(this).parent().toggleClass('active');
    });
    $('.pyramid .content').hover(function(){
        $(this).parents('g').toggleClass('active');
    });
});