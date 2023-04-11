Page({
  onShareAppMessage(res){//监听转发功能
    return {   // return Object，用于自定义转发内容
      title:'精仿猫眼电影',//当前小程序名称
      path:'pages/tabBar/movie/movie' //当前页面 path ，必须是以 / 开头的完整路径
    }
  },
  goto:function(){
    wx.navigateTo({
      url: '../../subPages/about-page/about-page',
    })
  },
})