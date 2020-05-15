$(function () {
  // ----------------------切换注册和登录的盒子-----------------------
  $('.goto-register').click(function () {
    $('#register').show().prev().hide();
  });
  $('.goto-login').click(function () {
    $('#register').hide().prev().show();
  });
  //--------------注册功能--------------------------------
  // 监听注册表单的提交事件
  $('#register form').on('submit', function (e) {
    // 阻止默认行为
    e.preventDefault();
    // 使用js收集表单数据
    var data = $(this).serialize();
    // 把账号和密码提交给接口，从而完成注册
    $.ajax({
      type: 'POST',
      url: 'http://www.liulongbin.top:3007/api/reguser',
      data: data,
      success: function (res) {
        alert(res.message);
        if (res.status == 0) {
          $('#register').hide().prev().show();
        }
      },
    });
    // 成功：提示 隐藏注册盒子显示登录盒子
  });
  //----------------完成表单验证-------------------------
  var form = layui.form;
  form.verify({
    len: [/^\w{6,12}$/, '密码长度必须是6-12位且不有空格'],
    same: function (value) {
      var password = $('#reg-password').val();
      if (value !== password) {
        return '两次密码输入不一致';
      }
    },
  });
  // -------------------完成登录功能------------------
  $('#login form').on('submit', function (e) {
    // 监听表单提交事件
    e.preventDefault();
    // 阻止默认行为
    // 获取账号和密码
    $.ajax({
      type: 'POST',
      url: 'http://www.liulongbin.top:3007/api/login',
      data: $(this).serialize(),
      success: function (res) {
        alert(res.message);
        if (res.status == 0) {
          location.href = '/index.html';
        }
      },
    });
    // ajax提交到端口
  });
});
