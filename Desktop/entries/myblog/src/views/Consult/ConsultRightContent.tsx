/*
 * @Author: zyq
 * @Date: 2022-05-11 19:54:41
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 20:03:45
 * @FilePath: \myblog\src\views\Consult\ConsultRightContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import styles from "./css/ConsultRightContent.module.css";

export default function CourseRightContent() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.topDiv1}>
          <h2>资讯快递</h2>
          <Button type="primary">
            <Link to={""}>立即投递</Link>
          </Button>
        </div>
        <p>欢迎投递行业动态、软件更新、编程语言相关资讯线索</p>
      </div>
      <div>
        <div className={styles.imgParent}>
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
            alt=""
          />
        </div>
        <div className={styles.imgParent}>
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f52d38ed0745b182db5c0fec927e9d~tplv-k3u1fbpfcp-no-mark:324:324:324:228.awebp?"
            alt=""
          />
        </div>
        <div className={styles.imgParent}>
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6914262570164aa3829437f5c6b79c0b~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
