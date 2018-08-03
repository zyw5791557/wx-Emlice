import { _showToast } from '../../utils/tools.js'

Page({
    data: {
        auth: null
    },
    onGotUserInfo(e) {
        wx.navigateBack({
            delta: 1
        })
    },
    onLoad(opt) {
        const msg = opt.msg;
        _showToast(msg)
        this.setData({
            auth: opt.auth
        })
    }
})