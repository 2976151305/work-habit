/**
 * 正则验证
 * @param {Number} type 验证类型{ 1: 手机号码, 2: 身份证, 3: 数字, 4: 英文a-Z }
 * @param {String} str 验证的字符串
 * @param {String} other 自定义验证方式
 */
let regex = (type, str, other = undefined) => {
  let regex = ''
  if (type === 0) regex = /^1[3456789]\d{9}$/
  if (type === 1) regex = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (type === 2) regex = /[0-9]/
  if (type === 3) regex = /[a-zA-Z]/
  if (!!other) regex = other
  if (regex.test(str)) return true
  else return false
}

/**
 * 输入处理
 * @param {Object} that 页面对象
 * @param {Object} e
 * @param {String} obj 修改对象
 */
let handleInput = (that, e, obj) => {
    const { value } = e.detail
    const { param } = e.currentTarget.dataset
    that.setData({
        [`${obj ? `${obj}.${param}` : param}`]: value
    })
}