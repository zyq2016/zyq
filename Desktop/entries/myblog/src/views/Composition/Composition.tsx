/*
 * @Author: zyq
 * @Date: 2022-05-12 14:02:23
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 10:30:11
 * @FilePath: \myblog\src\views\Composition\Composition.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout } from "antd";
import ComSideMenu from "./ComSideMenu";
import ComHeader from "./ComHeader";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

export default function Composition() {
  return (
    <Layout>
      <ComHeader />
      <Layout>
        <ComSideMenu />
        <Content style={{ paddingLeft: 20, paddingRight: 50 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
