Page({
  data:{
    order:null
  },
  onLoad(opt){
    const paramsObj = JSON.parse(opt.paramsStr)
    paramsObj.movieImg=decodeURIComponent(paramsObj.movieImg)
    this.initData(paramsObj)
  },
  initData(order){
    this.setData({
      order
    })
  }
})