import fetch from '../config/fectch';

/**
 * 账号密码登录
 */
export const accountLogin = (username, password) => fetch('/webpack/login.php', { username, password }, 'GET');


/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');