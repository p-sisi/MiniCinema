Page({
  data:{
    order:null,
    first:true //是否是第一次支付
  },
  onLoad(params){
    const paramsObj = JSON.parse(params.paramsStr)
    console.log(params.paramsStr);
    this.initData(paramsObj)
  },
  initData(params){
    params.movieImg=decodeURIComponent(params.movieImg)
    console.log('houlai: '+params.movieImg);
    this.setData({
      order:params
    })
  },
  //模拟支付
  payment(){
    //避免重复支付
    if(this.data.first){
      let movieOrder = wx.getStorageSync('movieOrder') || []
      movieOrder.unshift(this.data.order)
      wx.setStorageSync('movieOrder', movieOrder)
      wx.showToast({
        title: '支付成功',
      })
      this.setData({
        first:false
      })
      wx.navigateTo({
        url: `/pages/subPages/movie-order/movie-order`,
      })
    } else {
      wx.showToast({
        title: '已支付',
        icon:'none'
      })
    }
  }
})