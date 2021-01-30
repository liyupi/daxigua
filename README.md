## 合成大西瓜

**声明，本项目仅帮助大家学习技术及娱乐，切勿将修改后的网站大规模传播及商用，以避免侵权！**

> 有帮助的话，求个大大的 star，有疑问请联系 wx：liyupi66
> 
> 遇到问题可以先阅读本文档最后『 问题及解决 』

1 月 31 日晚 21 点，bilibili 直播交流，[程序员鱼皮](https://space.bilibili.com/12890453)  

详细教程：[魔改和上线你的合成大西瓜，最全教程！](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

视频教程：[全网最贴心的魔改合成大西瓜教程，从修改到发布！](https://www.bilibili.com/video/BV1Vy4y1n7KW/)

未修改版在线玩：[https://daxigua.liyupi.com](https://daxigua.liyupi.com)

魔改版在线玩：[https://dadaxigua.liyupi.com](https://dadaxigua.liyupi.com)

未修改版源码：https://github.com/liyupi/daxigua/releases/tag/1.0.0

![秀爆朋友圈](./assets/dadaxigua.png)

### 本地启动

1. 安装 serve 工具：

    ```bash
    npm i -g serve
    ```

2. 进入 daxigua 目录，运行 serve：

    ```bash
    serve
    ```
   
3. 打开浏览器访问 localhost:5000 即可！

### 快速魔改

> 按照下列说明修改即可，持续补充

1. 改分数：改 extraSettings.js 文件

2. 改图片：替换 res/raw-assets 目录下指定目录的图片，必须同文件名、后缀、尺寸，成功覆盖可生效

3. 无敌模式：改 extraSettings.js 文件

4. 指定第一个水果：改 extraSettings.js 文件

5. 指定下一个水果：在 project.js 代码中搜索 "改下一个水果"

6. 大水果合成小水果：在 project.js 代码中搜索 "大水果合成小水果"

7. 让水果更 Q 弹：改 extraSettings.js 文件，[原理参考](https://docs.cocos.com/creator/api/zh/classes/PhysicsCircleCollider.html?h=circlecollider)

8. 水果下落速度减缓：改 extraSettings.js 文件，[原理参考](https://docs.cocos.com/creator/manual/zh/physics/physics/rigid-body.html?h=%E5%88%9A%E4%BD%93)

9. 替换音乐

10. 替换背景

11. 去广告

12. 替换广告链接

13. 改网站标题：改 extraSettings.js 文件

14. 开启选分弹窗：改 extraSettings.js 文件


### 魔改原理

请先阅读：[魔改和上线你的合成大西瓜，最全教程！](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

我给 `project.js` 文件补充了注释，大家可以搜索关键字，如 "改分" 来快速定位，学习修改原理。

### 问题及解决

1. 无法安装 serve？

    答：如果报找不到 npm，请先安装 npm。

    如果安装中卡住，试着按下键盘（可能假死），还不行的话先用 npm 安装 cnpm（国内镜像，比较快）：
    
    ```bash
    npm install cnpm -g --registry=https://registry.npm.taobao.org 
    ```
    
    再执行 `cnpm i -g serve`。
