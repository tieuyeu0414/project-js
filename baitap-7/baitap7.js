$(document).ready(function () {
    let change_color = $('#head-menu h3');
    let array_color = [
        "white",
        "#9cf7f7",
        "#f79c9c",
        "#abf79c",
        "#fab3eee3",
        "#fccab2",
        "#b9b2fc"
    ]
    setInterval(function(){
        let color_random = array_color[Math.floor(Math.random() * array_color.length)];
        $(change_color).css('color', color_random);
    },2000);
    let btn_menu = $('.btn');
    $(btn_menu).click(function (e) { 
        e.preventDefault();
        $('#all-main-menu').toggleClass('show');
        $('.span').toggleClass('new-span');
    });
    //-----------------------------------------//
    let table__reg_hidden0 = $(".table__reg-hidden0");
    let table__reg_hidden1 = $('.table__reg-hidden1') ;
    let table__reg_hid = $('.table__reg-hid');
    let table__reg_hid1 = $('.table__reg-hid1');
    var if_hidden = 1;
    var if_hidden1 = 1;
    $(table__reg_hidden0).click(function (e) { 
        e.preventDefault();
        if(if_hidden == 1){
            $(table__reg_hidden0).html('<i class="fa fa-eye-slash" aria-hidden="true"></i>');
            $(table__reg_hid).removeAttr('type');
            $(table__reg_hid).attr('type', 'text');
            if_hidden = 2;
        }
        else if(if_hidden == 2){
            $(table__reg_hidden0).html('<i class="fa fa-eye" aria-hidden="true"></i>');
            $(table__reg_hid).removeAttr('type');
            $(table__reg_hid).attr('type', 'password');
            if_hidden = 1;
        }
    });
    $(table__reg_hidden1).click(function (e) { 
        e.preventDefault();
        if(if_hidden1 == 1){
            $(table__reg_hidden1).html('<i class="fa fa-eye-slash" aria-hidden="true"></i>');
            $(table__reg_hid1).removeAttr('type');
            $(table__reg_hid1).attr('type', 'text');
            if_hidden1 = 2;
        }
        else if(if_hidden1 == 2){
            $(table__reg_hidden1).html('<i class="fa fa-eye" aria-hidden="true"></i>');
            $(table__reg_hid1).removeAttr('type');
            $(table__reg_hid1).attr('type', 'password');
            if_hidden1 = 1;
        }
    });
});