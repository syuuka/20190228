Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {
      image: "../../images/p2517753454.jpg",
      title: "复仇者联盟3：无限战争",
      catlog: "动作/科幻/冒险"
    },
    comments:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '电影详情',
    })
  },
  addComment: function (){
    wx.navigateTo({
      url: '/pages/filmReview/filmReview',
    })
  }
})