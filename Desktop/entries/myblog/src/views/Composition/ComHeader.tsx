/*
 * @Author: zyq
 * @Date: 2022-05-12 14:24:37
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 15:38:21
 * @FilePath: \myblog\src\views\Composition\ComHeader.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/ComHeader.module.css";
import { Layout, Avatar } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
const { Header } = Layout;
export default function ComHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img
            style={{ height: 21 }}
            src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt=""
          />
        </Link>
        <h2>创作中心</h2>
      </div>

      <div className={styles.message}>
        <BellOutlined style={{ fontSize: 20, color: "black" }} />
      </div>
      <div className={styles.avatar}>
        <Avatar size={48} icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
