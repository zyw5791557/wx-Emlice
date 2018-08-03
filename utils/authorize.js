export const _checkSession = () => {
    return new Promise((resolve, reject) => {
        wx.checkSession({
            success () {
                resolve(true)
            },
            fail () {
                reject(false)
            }
        })
    })
}

export const _authHandle = setting => {
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success: (response) => {
                if (response.authSetting[setting]) {
                    resolve(true)
                }

                wx.authorize({
                    scope: setting,
                    success: () => {
                        resolve(true)
                    },
                    fail: () => {
                        reject(false)
                    }
                })
            }
        })
    })
}