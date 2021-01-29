## 合成大西瓜

未修改版源码，可直接在浏览器运行。

详细教程：https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw

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

4. 想要修改只需在 src/project.js 文件中搜索 '// '（斜杠斜杠空格），就能快速找到对应修改位置！

### 魔改原理

游戏的过程是：点击 => 碰撞 => 计分 => 展示

#### 1. 改分数

改分数有两种实现方式，修改计分规则，或者修改最后要展示的分数。原理很简单，搜索分数对应的英文单词 "score" 或者添加分数 "addScore"。

发现分数是由 default.score 作为统计值的，有这么一行代码：

```javascript
a.default.score += this.fruitNumber + 1
```

那我只要把基数 1 改为自己定义的数字即可~ 当然也可以让用户自己输入！

```javascript
a.default.score += this.fruitNumber + extraScore
```

当然，这种方式玩游戏就没有多少意思啦~

#### 2. 改图片

改图片的原理非常简单，直接找到原有的图片，然后用相同名称、相同格式、相同尺寸的图片进行替换即可！

我帮大家整理了图片替换表，地址如下：

【腾讯文档】魔改大西瓜可替换的素材 https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ

还有其他魔改方式，比如每次都下落相同水果，思路就是 "定位代码" => "修改调试"。持续补充！

大家可以学习下作者的源码，真的强！

### 发布上线

在本地修改好代码后，怎么发布到网上供其他人访问呢？

这里提供最简单的两种方法，不需要购买域名，也不需要买服务器！用户量不大的话，完全免费！

1. 使用 Vercel，在网页 index.html 文件所在目录通过一行命令即可自动发布到它提供的服务器并生成可访问的网址，还能和自己的域名绑定！（我的魔改版就是这么发布的）

2. 使用腾讯云静态网站托管服务，下载官方工具，也是一行命令，即可发布至腾讯云服务器！

可以参考这两篇文章的方式部署自己的网站：

腾讯云静态托管：[docsify+云开发，高效创造你的文档网站​](https://mp.weixin.qq.com/s/Noe90mhVssuBcySyb6TTNA)

Vercel：[尝鲜 Svelte 新框架，动手开发读书笔记](https://mp.weixin.qq.com/s/W-TWxOJTr4gSQkCyIquNuA)

后面会给大家出详细的独立部署教程！
