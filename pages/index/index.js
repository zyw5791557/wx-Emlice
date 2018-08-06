//index.js
//获取应用实例
const app = getApp()
import regeneratorRuntime from'../../lib/runtime.js'
import { _showToast } from '../../utils/tools.js'
import { _authHandle } from '../../utils/authorize.js'

Page({
    data: {
        animationStart: false,
        totalData: {
            company: '厦门哨子科技',
            address: '福建省厦门市思明区台南路73号',
            visitor: 666,
            phone: '13625006216'
        },
        iconList: [
        {
            class: 'a',
            icon: 'icon-dingwei',
            text: '定位',
            methods: 'location'
        },
        {
            class: 'b',
            icon: 'icon-diqiu',
            text: '主页',
            methods: null
        },
        {
            class: 'c',
            icon: 'icon-message',
            text: '短信',
            methods: null
        },
        {
            class: 'c',
            icon: 'icon-qrcode',
            text: '二维码',
            methods: null
        },
        {
            class: 'b',
            icon: 'icon-email',
            text: '邮箱',
            methods: null
        },
        {
            class: 'a',
            icon: 'icon-dianhua',
            text: '电话',
            methods: 'phone'
        }],
        modelInfo: [
        {
            label: '手机',
            value: '13625006216'
        },
        {
            label: '公司',
            value: '厦门哨子科技'
        },
        {
            label: '地址',
            value: '福建省厦门市思明区观音山福兴国际5楼501-502'
        },
        {
            label: '部门',
            value: '服务端'
        },
        {
            label: '职位',
            value: '经理'
        },
        {
            label: '邮箱',
            value: 'xiaomozye@sina.com'
        },
        {
            label: 'QQ',
            value: '634234943',
            button: true
        },
        {
            label: '微信号',
            value: 'Amo0592',
            button: true
        },
        {
            label: '网址',
            value: 'www.shaozi.top'
        },
        {
            label: '个人简洁',
            value: '智能大数据CEO'
        }],
        row: ''
    },
    showModel() {
        const val = this.data.row ? '' : 'row';
        this.setData({
            row: val
        })
    },
    eventTrigger(event) {
        if (!event.currentTarget.dataset.methodsName) {
            _showToast('暂未开放!')
            return;
        }
        const name = event.currentTarget.dataset.methodsName + 'Trigger';
        this[name]()
    },
     async locationTrigger() {
         const _this = this;
            await _authHandle('scope.userLocation')
                .then(() => {
                    wx.getLocation({
                        success (res) {
                            wx.openLocation({
                                latitude: res.latitude,
                                longitude: res.longitude,
                                name: _this.data.totalData.company,
                                address: _this.data.totalData.address
                            })
                        },
                        fail (err) {
                            console.log(err)
                        }
                    });
                }).catch(() => {
                    wx.navigateTo({
                        url: '../permission/permission?auth=getAuth&msg=请打开所有权限设置哟'
                    })
                })
    },
    phoneTrigger() {
        const _this = this;
        wx.makePhoneCall({
            phoneNumber: this.data.totalData.phone,
        })
    },
    onShareAppMessage(res) {
        return {
            title: 'Emlice',
            path: '/pages/index/index'
        }
    },
    onLoad() {
        this.setData({
            animationStart: true
        })
    }
})