$(document).ready(function () {
    $('button').click(function () { 
        $('#border').toggle();
    });
    $('#submit').click(function (e) {
        e.preventDefault();
        var thisdata = $('input[name="animation"]:checked').attr('data-info');
        console.log(thisdata);
        var run2 = $('.animation2').attr('data-info','gió');
        var run3 = $(".animation2").attr('data-info');
        var run = $('.animation1').attr('data-info','hơi');
        var run1 = $(".animation1").attr('data-info');
        var run4 = $('.animation').attr('data-info','tuyết');
        var run5 = $(".animation").attr('data-info');
        var run6 = $('.animation3').attr('data-info','mưa');
        var run7 = $(".animation3").attr('data-info');
        if($(".animation1").attr('data-info') === thisdata){
            $('.animation1').removeClass('add');
            $('.animation').addClass('add');
            $('.animation2').addClass('add');
            $('.animation3').addClass('add');
        }
        else if($(".animation2").attr('data-info') === thisdata){
            $('.animation2').removeClass('add');
            $('.animation').addClass('add');
            $('.animation1').addClass('add');
            $('.animation3').addClass('add');
        }
        else if($(".animation").attr('data-info') === thisdata){
            $('.animation').removeClass('add');
            $('.animation2').addClass('add');
            $('.animation1').addClass('add');
            $('.animation3').addClass('add');
        }
        else if($(".animation3").attr('data-info') === thisdata){
            $('.animation3').removeClass('add');
            $('.animation2').addClass('add');
            $('.animation1').addClass('add');
            $('.animation').addClass('add');
        }
    });
});
