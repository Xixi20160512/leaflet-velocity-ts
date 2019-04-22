# leaflet-velocity-ts

## 本地调试

git clone 源码之后，使用 npm link 方式链接源码文件

修改源码之后需要执行 **yarn build** 操作，才可以在 project 里面相应的体现出来更新

## DOC
与 [leaflet-velocity](https://github.com/danwild/leaflet-velocity) 使用方法基本相同，多一个参数，与 data 同级
```
options: {
    isZqSource: true  // 是否是真气网数据源，默认 false 
}
```

**umd使用**

``` javascript
velocityLayer.velocityLayer(options)
```

也就是说 umd 模式下面，模块中的变量会挂在`velocityLayer`这一变量下面

## TODO

- [ ] 完善本地调试过程，使用 hot reload 的方式更新
- [x] 统一插件出口，禁止使用 window 全局变量的形式调用
