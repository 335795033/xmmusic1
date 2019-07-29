# uni-app-range-slider   
uni-app 区间选择滑块   
   
说明：目前支持平台有APP、微信小程序、H5，其他平台理论上支持。   
   

## 效果图：   
![效果图](https://zhangdaren.github.io/uni-app-range-slider/static/preview.png)   
   
## range-slider属性   
   
| 属性名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| width | Number | 750 | 组件宽度(rpx)|
| height |Number |100 | 组件高度(rpx) |
| block-size | Number | 50 | 滑块大小(rpx) |
| bar-height | Number | 10 | 进度条高度(rpx) |
| background-color | String | #e9e9e9 | 进度条背景色 |
| active-color | String | #1aad19 | 已选择的颜色 |
| min | Number | 0 | 最小值 |
| max |Number | 100 | 最大值 |
| values |Array| [0,100] | 当前区间值 |
| step |Number| 1 | 步长值 |
| bindrangechange | EventHandle | |完成一次拖动后触发的事件，event.detail = {minValue: value1,maxValue:value2, originalValue:value3} |
   
---
## tips:   
修改自：https://github.com/Money888/wechat-rangeslider   
   
---
## 更新历史说明：   
### v1.0.7(20190604)   
* [新增] 支持设置步长，如显示值为0.5, 1, 1.5……这类的值   
* [新增] 增加一个选择时间区间的示例   
* 回调函数里默认输出的是格式化后的值，为了取值方便，也并原始值一并给出，方便操作   
   
### v1.0.6(20190521)   
* 适配最新自定义组件编译模式，如遇小程序/app不能正常使用时，请下载最新版   
   
### v1.0.5(20190417)   
* 解决某种微信环境内，touchstart回调的e参数不完整的问题   
   
### v1.0.4(20190326)   
* 解决手动赋值不生效的问题   
   
### v1.0.3(20190322)   
* 解决h5平台上，无法设置初始值的问题   
   
### v1.0.2(20190306)   
* 兼容H5，支持发布到浏览器   
   
### v1.0.1   
* 增加拖动过程中，自动更新滑块值功能。   
   
### v1.0.0   
* 初次提交   


