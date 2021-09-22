$(document).ready(function () {
    $("#button").click(function (e) { 
        e.preventDefault();
        $('.btn-all-around').toggleClass('btn-around');
        $('.btn-child').removeClass('show');
        $('.help').removeClass('run-1');
        $('.btn-child-1').removeClass('show-1');
        $('.login').removeClass('run');
        if($('.btn-around')[0]){
            $('.btn-around:nth-child(2)').css('transition-delay', '0.1s');
            $('.btn-around:nth-child(3)').css('transition-delay', '0.2s');
            $('.btn-around:nth-child(4)').css('transition-delay', '0.3s');
            $('.btn-around:nth-child(5)').css('transition-delay', '0.4s');
            $('.btn-around:nth-child(6)').css('transition-delay', '0.5s');
            $('.btn-around:nth-child(7)').css('transition-delay', '0.6s');
            $('.btn-around:nth-child(8)').css('transition-delay', '0.7s');
            if($('.btn-around').css('transition-delay')[0]){
                $('.btn-around').removeAttr('style');;
            }
        }
    });
    $('.login').click(function (e) { 
        e.preventDefault();
        $('.login').toggleClass('run');
        if($('.run')[0]){
            $('.btn-child').css('display', 'block');
            $('.btn-child-1').removeClass('show-1');
            $('.help').removeClass('run-1');
            if($('.btn-child').css('display')[0]){
                $('.btn-child').toggleClass('show');
            }
        }
        else{
            $('.btn-child').removeAttr('style');
            $('.btn-child').removeClass('show');
        }
    });
    $('.help').click(function (e) { 
        e.preventDefault();
        $('.help').toggleClass('run-1');
        if($('.run-1')[0]){
            $('.btn-child-1').css('display', 'block');
            $('.btn-child').removeClass('show');
            $('.login').removeClass('run');
            if($('.btn-child-1').css('display')[0]){
                $('.btn-child-1').toggleClass('show-1');
            }
        }
        else{
            $('.btn-child-1').removeAttr('style');
            $('.btn-child-1').removeClass('show-1');
        }
    });
});