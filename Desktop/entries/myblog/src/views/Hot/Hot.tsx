/*
 * @Author: zyq
 * @Date: 2022-05-11 17:05:21
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-14 11:23:12
 * @FilePath: \myblog\src\views\Hot\Hot.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout } from "antd";
import HotLeft from "./HotLeft";
import HotRight from "./HotRight";
import HotMiddle from "./HotMiddle";
const { Sider, Content } = Layout;
export default function Hot() {
  return (
    <Layout
      style={{
        width: "1200px",
        margin: "0 auto",
        marginTop: 20,
      }}
    >
      <Sider style={{ backgroundColor: "inherit" }}>
        <HotLeft />
      </Sider>
      <Content style={{ margin: "0 20px" }}>
        <HotMiddle />
      </Content>
      <Sider style={{ backgroundColor: "inherit" }}>
        <HotRight />
      </Sider>
    </Layout>
  );
}
