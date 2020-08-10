import axios from "axios";

// 目前登录注册功能接口有问题不可使用

/**
 * 登录接口
 *
 * @export
 * @param {*} userInfo  {loginId,loginPwd}
 * @returns token 令牌 和登录信息
 */
export async function loginIn(userInfo) {
    var res = await axios.post('/api/user/login', userInfo)
    var token = res.headers.authorization;
    if (token) {
        localStorage.setItem("token", token)
    }

    return res.data.data
}

/**
 *
 *
 * @export  退出登录
 */
export async function loginOut() {
    localStorage.removeItem('token')

}


/**
 *
 *
 * @export  通过令牌去获取用户信息，记录在本地
 * @returns 用户信息
 */
export async function whoami() {
    var token = localStorage.getItem('token')
    if (!token) {
        return null
    }
    var res = await axios.get('/api/user/whoami', {
        authorization: `bearer ${token}`
    })
    return res.data.data
}

/**
 *
 *
 * @export  注册信息
 * @param {*} userInfo   loginId loginPwd nickname
 * @returns  是否注册成功
 */
export async function reg(userInfo) {
    var res = await axios.post('/api/user/reg', {
        userInfo
    })
    return res.data.data
}