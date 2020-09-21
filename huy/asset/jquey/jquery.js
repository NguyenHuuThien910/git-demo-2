$(document).ready(function(){
    $(".choice").click(function(){
        $(this).toggleClass('da-chon-0');
        $(this).find('p').toggleClass('da-chon');
        $(this).find('.select').toggle();
    });
});