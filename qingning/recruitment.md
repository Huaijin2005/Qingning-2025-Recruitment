# 青柠工作室招新题目

## 注意事项

- 招新题目分为“算法部分”和“项目部分”。 大一同学可任选**一部分**作答，大二同学需**完成两个部分**的内容。、
- “算法部分”有 5 道题目，在virtual judge平台提交代码，要求全部完成。
- “项目部分”侧重于某个专业领域（包括爬虫数据采集、深度学习、后端实践、前端开发等），允许使用开源代码，但需要学习相关领域的一些前置知识，并基本理解算法思想，答辩时可在一定程度上进行讲解。**任选一题**完成即可。 
- “算法部分”以virtual judge平台打分为准，“项目部分”则由工作室高年级同学商议评分。在提交作品的同学中选出完成情况较好的同学进行答辩。
- 附加题：鉴于保研对本科生科研能力的要求逐步提高，我们为有一定科研能力的候选人提供附加题，将作为招新题目完成程度相同时的加分项：从所给论文中任选一篇阅读，并能从中获取有效信息，掌握论文的创新点和算法。温馨提示：论文难度较高。
- 答辩环节包括：（1）介绍自身基本情况；（2）由工作室高年级同学抽问1-2道已做答的算法思路；（3）对自己完成的项目进行讲解并回答相关问题；（4）对选择做附加题的同学，会针对论文内容进行提问。
- 作品提交截止日期为 10 月11 日中午 12：00。需要提交的内容有报名表（群文件）、源代码、题目完成方法详细说明、演示视频（针对“项目部分”）。最终将所有内容打为压缩包，命名为青柠招新-姓名-学号（如：青柠招新-张三-202509xxxxxxx），邮件主题命名方式相同，发送到 [3510671332@qq.com](mailto:1226572618@qq.com)。

## 算法部分

在virtual judge平台解答题目并在提交代码。

平台比赛链接：[青柠2025招新题 - Virtual Judge](https://vjudge.net/contest/745157)

## 项目部分

### Python网络爬虫

目前，随着计算机视觉的兴起，我们经常需要在网络上寻找某类图片作为数据集。然而，手动下载大量图片耗时耗力，一般我们会使用网络爬虫进行批量爬取。假设你正在用计算机视觉的相关知识解决垃圾分类问题，需要电池、塑料饮料瓶、易拉罐、烟头、香蕉皮（或香蕉）等常见垃圾的图片，以上述5种垃圾为例，编写一个Python网络爬虫，在百度图片爬取这些垃圾的图片各100张（存储方式随意）。

![image-20250903233754859](https://cdn.jsdelivr.net/gh/Huaijin2005/image_host@main/test/20250903233754930.png)

### 图片分类

假设你已经收集好了一些垃圾的图片（仍以电池、塑料饮料瓶、易拉罐、烟头、香蕉为例，你可以自己爬取也可以利用开源数据集），请使用机器学习的方式编写代码，将这些图片分类。

无论你使用何种方法实现，最终你需要实现一个Python接口供我们测试：

```python
def classify(img):
 """
 进行图片分类
 :param img: cv2.imread 图像(格式为numpy.ndarray)
 :return: 输入图片的类别名称，中文字符串
 """

# 你编写的代码

return name_str

```

### 目标检测

你要建立一个目标检测的模型，可以识别图中的人是否佩戴了口罩。你的最终目标是在得到一张图片后，检测出该图片中的总人数和佩戴口罩的人数。

无论你使用何种方法实现，最终你需要实现一个Python接口供我们测试：

```python
def predict(img):
 """
 加载模型和模型预测
 :param img: cv2.imread 图像(格式为numpy.ndarray)
 :return: 预测的图片中的总人数、其中佩戴口罩的人数，数字格式
 """

# 你编写的代码

return all_num, mask_num

```



### 后端实践

#### 问答题

1. git常用指令及指令功能
2. Restful API 概念
3. 谈谈你对后端的认识
4. 前后端分离/不分离的区别

#### 实践题

可参考如下采⽤主流编程语⾔（C、C++、Java、Python、Go）与主流数据库（Oracle、MySQL、PostgreSQL),设计⼀个web应⽤(推荐使⽤python+flask+mysql），实现以下接⼝，并使⽤接⼝测试⼯具进⾏测试。

1. 用户注册

   ![image-20250903233715326](https://cdn.jsdelivr.net/gh/Huaijin2005/image_host@main/test/20250903233715382.png)

   - 数据库表中需至少包含请求体中的三类信息，主键采用雪花算法生成
   - 每个用户的邮箱需要唯一，若用户输入的邮箱已经在数据库中存在，响应体中需要包含“邮箱已注册”
   - 每个用户的用户名需要唯一，若用户输入的用户已经在数据库中存在，响应体需包含“用户名已注册”
   - 校验邮箱格式参考资料：https://zhuanlan.zhihu.com/p/438574574，若邮箱格式不正确，响应体中需包含“邮箱格式错误”

2. 用户登录

   ![image-20250903233705488](https://cdn.jsdelivr.net/gh/Huaijin2005/image_host@main/test/20250903233705544.png)

3. 邮箱调用

   ![image-20250903233655403](https://cdn.jsdelivr.net/gh/Huaijin2005/image_host@main/test/20250903233655463.png)

   - 调用此接口的用户必须已经注册（不要求登录）
   - 从数据库中提取该用户的邮箱，并向该邮箱发送邮件，内容即为请求体中questio
   - 参考资料：https://blog.csdn.net/qq_40243750/article/details/126032582

### 前端开发

目前，网页开发也是一项通用的技能。请你用前端开发的知识，模仿携程在线Web手机端主界面（https://m.ctrip.com/html5/）编写一个静态网页。（可能用到的技术栈有：JavaScript、CSS、HTML，flex布局等移动端布局）

![image-20250903233314883](https://cdn.jsdelivr.net/gh/Huaijin2005/image_host@main/test/20250903233315073.png)

## 附加题：论文

1. 3D Gaussian Splatting for Real-Time Radiance Field Rendering

2. FREEVS: GENERATIVE VIEW SYNTHESIS ON FREE DRIVING TRAJECTORY

3. Insight-V: Exploring Long-Chain Visual Reasoning with Multimodal Large Language Models
4. UniAudio: An Audio Foundation Model Toward Universal Audio Generation
5. Taming Multimodal Joint Training for High-Quality Video-to-Audio Synthesis

