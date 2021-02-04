/**
 * 声明，本项目仅帮助大家学习技术及娱乐，切勿将修改后的网站大规模传播及商用，以避免侵权！
 */

// 额外分数：修改数字
let extraScore = 1;

// 无敌模式：true 改为 false
let wuDi = true;

// 第一个水果：修改数字为 0-10, 0 为葡萄，9 为半个西瓜
let firstFruit = 0;

// 水果合成反转：false 改为 true
let reverseLevelUp = false;

// 指定生成的水果：默认值: 不开启反转 0-5 开启反转 6-11，修改对应数字即可控制随机生成的水果范围
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 指定前几次生成的水果，可填入任意数量的数字，0 为葡萄，9 为半个西瓜
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 让水果更 Q 弹：false 改为大于 0 小于 1 的任意小数（推荐 0.9）
let fruitQTan = false;

// 让水果下落缓慢：false 改为大于 0 的任意数，值越大阻力越大，下落越慢（推荐 5）
let fruitSlowDown = false;

// 点击右上方图标更换水果：false 改为 true 即可
let clickChangeFruit = true;

// 广告链接：false 或为空字符串表示不会跳转到广告
let adLink = 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png';

// 修改网页标题：将 "合成大西瓜" 进行替换
document.getElementsByTagName("title")[0].innerText = '合成大西瓜';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;

