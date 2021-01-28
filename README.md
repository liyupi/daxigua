## 合成大西瓜

未修改版源码，可直接在浏览器运行

在线玩：[https://daxigua.liyupi.com](https://daxigua.liyupi.com)

看了下源码，改分数还是挺简单的，就也做了魔改版~ 输入分数加成（纯数字）即可，输入 1 为原版

魔改版在线玩：[https://dadaxigua.liyupi.com](https://dadaxigua.liyupi.com)

![秀爆朋友圈](./assets/dadaxigua.png)

### 本地启动

1. 安装 serve 工具：

    ```bash
    npm run serve
    ```

2. 进入 daxigua 目录，运行 serve：

    ```bash
    serve
    ```
   
3. 打开浏览器访问 localhost:5000 即可！

### 魔改原理

游戏的过程是：点击 => 碰撞 => 计分 => 展示

因此改分数有两种实现方式，修改计分规则，或者修改最后要展示的分数。原理很简单，搜索分数对应的英文单词 "score" 或者添加分数 "addScore"。

发现分数是由 default.score 作为统计值的，有这么一行代码：

```javascript
a.default.score += this.fruitNumber + 1
```

那我只要把基数 1 改为自己定义的数字即可~ 当然也可以让用户自己输入！

```javascript
a.default.score += this.fruitNumber + extraScore
```

还有其他魔改方式，比如每次都下落相同水果，思路就是 "定位代码" => "修改调试"。

当然，这种方式玩游戏就没有多少意思啦，大家可以学习下作者的源码，真的强！
