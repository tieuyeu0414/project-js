$(document).ready(function () {
    $('.logo a').click(function (e) { 
        e.preventDefault();
        $('section').toggle();
    });
    $('.color .choose').click(function (e) { 
        e.preventDefault();
        $('.cl').toggle( function(){});
    });
    var cl = $('.cl-red, .cl-blue, .cl-green, .cl-yellow, .cl-purple')
    for(i = 0; i < cl.length; i++){
        $(cl[i]).click(function (e) { 
            e.preventDefault();
            if($(this).attr('data-color') === $('.red').attr('data-bgcolor')){
                $('.red').addClass('add');
                $('.blue').removeClass('add');
                $('.green').removeClass('add');
                $('.yellow').removeClass('add');
                $('.purple').removeClass('add');
            }
            else if($(this).attr('data-color') === $('.blue').attr('data-bgcolor')){
                $('.red').removeClass('add');
                $('.blue').addClass('add');
                $('.green').removeClass('add');
                $('.yellow').removeClass('add');
                $('.purple').removeClass('add');
            }
            else if($(this).attr('data-color') === $('.green').attr('data-bgcolor')){
                $('.red').removeClass('add');
                $('.blue').removeClass('add');
                $('.green').addClass('add');
                $('.yellow').removeClass('add');
                $('.purple').removeClass('add');
            }
            else if($(this).attr('data-color') === $('.yellow').attr('data-bgcolor')){
                $('.red').removeClass('add');
                $('.blue').removeClass('add');
                $('.green').removeClass('add');
                $('.yellow').addClass('add');
                $('.purple').removeClass('add');
            }
            else if($(this).attr('data-color') === $('.purple').attr('data-bgcolor')){
                $('.red').removeClass('add');
                $('.blue').removeClass('add');
                $('.green').removeClass('add');
                $('.yellow').removeClass('add');
                $('.purple').addClass('add');
            }
        });
    }
});