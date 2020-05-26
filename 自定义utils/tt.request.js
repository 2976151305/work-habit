import { toast } from './util'
const { BASEURL } = getApp().globalData

/**
 * 发起请求
 * @param {String} url 请求URL
 * @param {String} method 请求方法
 * @param {Object} data 请求参数
 * @param {Object} header 请求头
 * @returns
 */
const request = (url, method, data, header) => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: BASEURL + url,
      method,
      data,
      header,
      success: res => {
        if (res.statusCode === 200) resolve(res)
        else {
          toast('出错了')
          reject(err)
        }
      },
      fail: err => {
        toast('出错了')
        reject(err)
      }
    })
  })
}

module.exports = {
  request
}