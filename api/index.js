// 当前这个模块进行接口管理
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口
// /api/product/getBaseCategoryList   get   无参数

export const reqCategoryList = () => {
  // 发请求，axios发请求返回的是promise对象
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取轮播图假数据
export const reqBanners = () => {
  return mockRequests({ url: '/banners', method: 'get' })
}

// 获取floors假数据
export const reqFloors = () => {
  return mockRequests({ url: '/floors', method: 'get' })
}

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => {
  return requests({ url: '/list', method: 'post', data: params })
}

// 获取详情页数据
export const reqDetails = (skuId) => {
  return requests({ url: `/item/${skuId}`, method: 'get' })
}

// 获取添加购物车的数据
export const reqShopCar = (skuId, skuNum) => {
  return requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
}

// 获取购物车的数据
export const reqCartList = () => {
  return requests({ url: '/cart/cartList', method: 'get' })
}

// 删除购物车的数据
export const delCartList = (skuId) => {
  return requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
}

// 修改选中状态
export const changeChecked = (skuId, isChecked) => {
  return requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
}

// 获取验证码
export const reqGetCode = (phone) => {
  return requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
}

// 注册请求   为什么用data不拼接到网址上
export const reqUserRegister = (data) => {
  return requests({ url: `/user/passport/register`, data, method: 'post' })
}

// 登录请求
export const reqUserLogin = (data) => {
  return requests({ url: `/user/passport/login`, data, method: 'post' })
}

// 获取用户信息
export const reqUserInfo = () => {
  return requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' })
}

// 退出登录
export const reqLoginOut = () => {
  return requests({ url: `/user/passport/logout`, method: 'get' })
}