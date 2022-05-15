/*
 * @Author: zyq
 * @Date: 2022-05-11 18:38:58
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 10:45:54
 * @FilePath: \myblog\src\views\Home\HomeLeftContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";
import { Image, Menu, MenuProps } from "antd";
import { CommentOutlined, LikeOutlined, EyeOutlined } from "@ant-design/icons";
import styles from "./css//HomeLeftContent.module.css";
export default function HomeContent() {
  const [current, setCurrent] = useState("comom");
  const items: MenuProps["items"] = [
    {
      label: "综合",
      key: "comom",
    },
    {
      label: "最近",
      key: "last",
    },
    {
      label: "最热",
      key: "hot",
    },
  ];
  const handleChange: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className={styles.HomeContent}>
      <Menu
        className={styles.nav}
        onClick={handleChange}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <ul>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.article}>
            <p className={styles.article_top}>
              <span className="author">作者:小鱼儿</span>
              <span className="time">创建时间:28天前</span>
              <span>标签1:前端</span>
              <span>标签2:·javascript</span>
            </p>
            <div className={styles.article_middle}>
              <div>
                <h3 className={styles.article_title}>
                  Google I/O 开发者大会征文大赛，限量周边礼包等你拿
                </h3>
                <p className={styles.article_content}>
                  开始用felx写了一版，总感觉代码非常不优雅，条件判断很多，后来一想，我们是新项目，不兼容ie的，为啥不用grid布局呢，但是grid布局纯写css并不难，怎么把其封装成一个通用组件，并且使用起来要:
                  替代antd的grid组件！ element plus 的layout组件！
                  问题就来了，市面上通用组件库都没这个组件啊，咋办，手写呗。参考开源项目
                  styled-css-grid，咋们用react函数式组件实现，并附有在线案例。因为代码只涉及到css封装，vue也可以借鉴然后封装自己的超强布局组件。
                  作者：孟祥_成都
                  链接：https://juejin.cn/post/7089723383218176013
                  来源：稀土掘金
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
                <p className={styles.article_control}>
                  <span>
                    <EyeOutlined />
                    500
                  </span>
                  <span>
                    <LikeOutlined />
                    200
                  </span>
                  <span>
                    <CommentOutlined />
                    100
                  </span>
                </p>
              </div>
              <Image
                width={120}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
