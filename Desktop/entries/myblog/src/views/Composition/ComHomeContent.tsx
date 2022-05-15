/*
 * @Author: zyq
 * @Date: 2022-05-12 16:02:35
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 16:46:18
 * @FilePath: \myblog\src\views\Composition\ComHomeContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styles from "./css/ComHomeContent.module.css";

export default function ComHomeContent() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.top}>
          <h2>创作中心</h2>
          <span className={styles.getMore}>
            查看更多 <RightOutlined />
          </span>
        </div>
        <div style={{ margin: "20px 0 " }}>
          <Carousel autoplay>
            <div>
              <h3 className={styles.contentStyle}>1</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>2</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>3</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div>
        <div className={styles.top}>
          <h2>数据总览</h2>
          <span className={styles.getMore}>
            查看更多 <RightOutlined />
          </span>
        </div>
        <div className={styles.cardShow}>
          <ul>
            <li>
              <div>
                <p>总关注者数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
            <li>
              <div>
                <p>文章展现数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
            <li>
              <div>
                <p>文章阅读数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <p>文章点赞数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
            <li>
              <div>
                <p>文章评论数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
            <li>
              <div>
                <p>文章收藏数</p>
                <h2>0</h2>
                <p>较昨日 ——</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
