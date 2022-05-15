/*
 * @Author: zyq
 * @Date: 2022-05-11 19:54:41
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 15:29:48
 * @FilePath: \myblog\src\views\Course\CourseRightContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { BookOutlined } from "@ant-design/icons";

import styles from "./css/CourseRightContent.module.css";

export default function CourseRightContent() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <Link to={""}>
          <BookOutlined />
          我的课程
        </Link>
      </div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className={styles.otherDiv1}>
          <h3>xx课程是什么？</h3>
          <p>一个小篇幅、高浓度、成体系、有收益的技术学习平台</p>
        </div>
        <div className={styles.otherDiv1}>
          <h3 style={{ textAlign: "center", paddingBottom: "8px" }}>
            关注公众号，领取优惠券
          </h3>
          <Image
            style={{ width: "100%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </div>
    </div>
  );
}
