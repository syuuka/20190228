// miniprogram/pages/hotMovie/hotMoive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
      image: "../../images/p2517753454.jpg",
      title: "复仇者联盟3：无限战争",
      catlog: "动作/科幻/冒险"
    }, {
      image: "../../images/p2517753454.jpg",
      title: "复仇者联盟3：无限战争",
      catlog: "动作/科幻/冒险"
    }]
  },

  onLoad:function (){
    wx.setNavigationBarTitle({
      title: '热门电影',
    })
  }
})