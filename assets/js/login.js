$(function () {
  // ----------------------切换注册和登录的盒子-----------------------
  $('.goto-register').click(function () {
    $('#register').show().prev().hide();
  });
  $('.goto-login').click(function () {
    $('#register').hide().prev().show();
  });
});
