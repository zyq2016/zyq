/*
 * @Author: zyq
 * @Date: 2022-05-11 18:38:58
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 16:47:06
 * @FilePath: \myblog\src\views\Consult\ConsultLeftContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import styles from "./css//ConsultLeftContent.module.css";
export default function CourseContent() {
  const [current, setCurrent] = useState("lastest");
  const items: MenuProps["items"] = [
    {
      label: "最新",
      key: "lastest",
    },
    {
      label: "热榜",
      key: "hostest",
    },
  ];
  const handleChange: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={styles.HomeContent}>
      <div className={styles.top}>
        <Menu
          className={styles.nav}
          onClick={handleChange}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <ul className={styles.consultList}>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>

        <li className={styles.consultItem}>
          <div className={styles.otherDiv1}>
            <div className={styles.leftContent}>
              <h2>叮!这里有一份关于XX平台咨询活动的参考指南</h2>
              <p className={styles.consultContent}>
                关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容关于咨询的内容
              </p>
              <p className={styles.otherP}>
                <span className={styles.authorName}>作者名字</span>
                <span>1小时前</span>
                <span>0点赞</span>
                <span>0评论</span>
              </p>
            </div>
            <div className={styles.rightContent}>
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
                alt=""
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
