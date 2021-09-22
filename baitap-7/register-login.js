$(document).ready(function () {
    let password = $('input[name="password"]');
    let repassword = $('input[name="repassword"]');
    $(repassword).change(function (e) { 
        e.preventDefault();
        if(password.val() !== repassword.val()){
            $('.pass-re').text('Mật khẩu không khớp');
        }
        else{
            $('.pass-re').text('');
        }
    });
});