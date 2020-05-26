const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * toast提示
 * @param {String} title 提示内容
 * @param {Number}} duration 持续时间
 * @param {String} icon 显示图标
 */
const toast = (title, duration = 2000, icon = 'none') => {
  wx.showToast({
    title,
    duration,
    icon
  })
}

/**
 * 模态框
 * @param {String} title 标题
 * @param {String} content 内容
 * @param {Object} confirmConfig 确认按钮设置
 * @param {Object} cancelConfig 取消按钮设置
 * @param {Function} successCallBack 成功回调
 * @param {Function} failCallBack 失败回调
 */
const showModal = (title, content, confirmConfig, cancelConfig, successCallBack = () => {}, failCallBack = () => {}) => {
  wx.showModal({
    title,
    content,
    ...confirmConfig,
    ...cancelConfig,
    success: res => {
      if (res.confirm) successCallBack()
      else failCallBack()
    },
    fail: err => {
      throw new Error(err)
    }
  })
}

/**
 * 创建动画
 * @param {Number} duration 持续时间
 * @param {Number} delay 持续时间
 * @param {String} timingFunction 动画效果
 * @param {String} transformOrigin 重心位置
 * @returns
 */
const createAnimation = (duration = 300, delay = 0, timingFunction = 'linear', transformOrigin = '50% 50% 0') => {
  const animation = wx.createAnimation({
    duration,
    delay,
    timingFunction,
    transformOrigin
  })
  return animation
}

/**
 * 设置缓存
 * @param {String} name 缓存key
 * @param {} data 缓存数据
 */
const setStorage = (name, data) => {
  if (data instanceof Object) data = JSON.stringify(data)
  wx.setStorageSync(name, data)
}

/**
 * 读取缓存
 * @param {String}} name 缓存key
 * @returns
 */
const getStorage = name => {
  let res = wx.getStorageSync(name)
  if (res.indexOf('{') >= 0) res = JSON.parse(res)
  return res
}

/**
 * 创建对象实例
 * @param {String} el 对象选择器
 * @returns
 */
const createSelectorQuery = (el) => {
  return new Promise((resolve, reject) => {
    const query = wx.createSelectorQuery()
    query.select(el).boundingClientRect()
    query.exec(res => {
      resolve(res[0])
    })
  })
}

module.exports = {
  formatTime,
  toast,
  showModal,
  createAnimation,
  getStorage,
  setStorage,
  createSelectorQuery
}
