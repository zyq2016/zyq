/*
 * @Author: zyq
 * @Date: 2022-05-11 15:45:58
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 15:29:12
 * @FilePath: \myblog\src\views\Main.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MyHeader from "./MyHeader";
const { Content } = Layout;

export default function Home() {
  return (
    <Layout className="layout">
      <MyHeader />

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
