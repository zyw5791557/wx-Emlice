export const _showToast = msg => {
    wx.showToast({
        title: msg,
        icon: 'none',
        duration: 2000
    })
}