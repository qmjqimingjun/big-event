$(function () {
  var form = layui.form;
  function renderForm() {
    $.ajax({
      type: 'GET',
      url: '/my/userinfo',

      success: function (res) {
        //   $('input[name="nickname"]').val(res.data.nickname);
        //   $('input[name="username"]').val(res.data.username);
        //   $('input[name="email"]').val(res.data.email);

        form.val('setval', res.data);
      },
    });
  }

  // 监听表单的提交事件。
  $('form').on('submit', function (e) {
    // 阻止默认行为
    e.preventDefault();
    // 获取id、nickname、email的值
    var data = $(this).serialize();
    // console.log(data);
    // ajax提交给接口，从而完成更新
    $.ajax({
      type: 'POST',
      url: '/my/userinfo',
      data: data,
      success: function (res) {
        // 无论成功还是失败，都要提示
        layer.msg(res.message);
        if (res.status === 0) {
          window.parent.getUserInfo();
        }
      },
    });
  });

  // ------------------   重置表单 --------------------
  // 重置的时候，并不是清空输入框的值，而是恢复默认的样子
  $('button[type="reset"]').on('click', function (e) {
    e.preventDefault();
    renderForm(); // 调用函数，从新发送ajax请求，获取用户信息，从新为表单赋值
  });
});
