$(function () {
  //-------------获取用户信息并渲染到页面-------------------------
  getUserInfo();
  //-------------------------退出功能-------------------------
  $('#logout').click(function () {
    layer.confirm('确定退出吗?', { icon: 3, title: '提示' }, function (index) {
      //do something
      localStorage.removeItem('token');
      location.href = '/login.html';
      layer.close(index);
    });
  });
});
//封装函数完成获取用户信息并渲染到页面中
function getUserInfo() {
  $.ajax({
    type: 'get',
    url: '/my/userinfo',

    success: function (res) {
      if (res.status == 0) {
        var name = res.data.nickname || res.data.username;
        $('.welcome').html('欢迎你 &nbsp;' + name);
        if (res.data.user_pic) {
          $('.layui-nav-img').attr('src', res.data.user_pic).show();
          $('.text-img').hide();
        } else {
          $('.layui-nav-img').hide();
          $('.text-img')
            .css('display', 'inline-block')
            .text(name.substr(0, 1).toUpperCase());
        }
      }
    },
  });
}
