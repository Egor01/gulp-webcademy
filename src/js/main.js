$(document).ready(function(){

var $inputemail = $('#reglog__input-email');
var $inputpassword = $('#reglog__input-password');
var $emailerror = $('.input_email_error');
var $passworderror = $('.input_password_error');
var $emailbusy = $('.email_busy');


$('.button').on('click',function(e){
e.preventDefault();

if (($inputemail.val()=='') || ($inputemail.val()==' '))
{$('.input_email_error').parent().addClass('visible-error')};

if (($inputpassword.val()=='') || ($inputpassword.val()==' '))	
{$('.input_password_error').parent().addClass('visible-error')};

/*  пока не подключена база данных, для проверки задан email - abc@yandex.ru  */	
if ($inputemail.val()=='abc@yandex.ru')
{$emailbusy.parent().addClass('visible-error')};

    
/* убираем сообщение об ошибке*/
($inputemail).on('focus',function(){
if ($emailbusy.parent().hasClass("visible-error"))
{$emailbusy.parent().removeClass('visible-error');}
});

($inputemail).on('focus',function(){
if ($emailerror.parent().hasClass('visible-error'));
{$emailerror.parent().removeClass('visible-error');}
});

($inputpassword).on('focus',function(){
if ($passworderror.parent().hasClass('visible-error'));
{$passworderror.parent().removeClass('visible-error');}
});

});

});