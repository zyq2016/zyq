/*
 * @Author: zyq
 * @Date: 2022-05-12 12:10:50
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 12:51:56
 * @FilePath: \myblog\src\views\Home\Tag\Tag.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Content } = Layout;
export default function Tag() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#ffffff" }}>
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["myTag"]}
          style={{ margin: "0 auto", maxWidth: 960 }}
        >
          <Menu.Item key="myTag">
            <Link to={"/tag/myTag"}>已关注标签</Link>
          </Menu.Item>
          <Menu.Item key="allTags">
            <Link to={"/tag/allTags"}>全部标签</Link>
          </Menu.Item>
        </Menu>
      </div>

      <Content style={{ margin: "0 auto", width: 960, paddingTop: 20 }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
