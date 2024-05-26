// 引入mockjs模块
import Mock from 'mockjs'
// 引入数据。JSON数据没有对外暴露，但是可以引入
// 因为webpack默认对外暴露：图片、JSON数据
import banners from './banners.json'
import floors from './floors.json'

// mock数据：第一个参数：请求的地址 第二个参数：请求的数据
Mock.mock("/mock/banners", { code: 200, data: banners })
Mock.mock("/mock/floors", { code: 200, data: floors })

