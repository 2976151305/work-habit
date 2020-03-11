const app = getApp()

/**
 * 提示
 * @param {String} title
 * @param {String} icon
 * @param {Number} duration
 * @param {Function} callBack
 */
let toast = (title, icon = 'none', duration = 2000, callBack = () => { }) => {
    wx.showToast({
        title,
        icon,
        duration,
        success: (res) => {
            callBack(res)
        }
    })
}

/**
 * 请求
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 * @param {Object} header
 */
let request = (url, method = 'GET', data = {}, header) => {
    return Promise((resolve, reject) => {
        wx.request({
            url: app.globalData.BASEURL + url,
            method,
            data,
            header: { 'Content-Type': 'application/json' } || header,
            success: res => reject(res),
            fail: err => reject(err)
        })
    })
}

module.exports = {
    toast, request, regex, handleInput
}