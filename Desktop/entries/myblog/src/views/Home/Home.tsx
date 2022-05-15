/*
 * @Author: zyq
 * @Date: 2022-05-11 17:04:55
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 12:31:28
 * @FilePath: \myblog\src\views\Home\Home.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout } from "antd";
import HomeHeader from "./HomeHeader";
import HomeLeftContent from "./HomeLeftContent";
import HomeRightContent from "./HomeRightContent";
import styles from "./css/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout className="layout">
      <div className={styles.top}>
        <HomeHeader />
        <div className={styles.tag}>
          <Link to={"/tag"}>标签管理</Link>
        </div>
      </div>

      <div className={styles.content}>
        <HomeLeftContent />
        <HomeRightContent />
      </div>
    </Layout>
  );
}
