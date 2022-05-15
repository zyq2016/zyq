/*
 * @Author: zyq
 * @Date: 2022-05-12 14:19:24
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 21:25:16
 * @FilePath: \myblog\src\views\Composition\ComSideMenu.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, MenuProps, Avatar, Button } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./css/ComSideMenu.module.css";

const { Sider } = Layout;

export default function ComSideMenu() {
  const [current, setCurrent] = useState("comHomeContent");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items: MenuProps["items"] = [
    {
      label: <Link to={"/composition/comHomeContent"}>首页</Link>,
      key: "comHomeContent",
      icon: <MailOutlined />,
    },
    {
      label: "内容管理",
      key: "content",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link to={"/composition/comConduct"}>文章管理</Link>,
          key: "conConduct",
        },
        {
          label: "专栏管理",
          key: "special",
        },
        {
          label: "沸点管理",
          key: "hot",
        },
      ],
    },
    {
      label: "数据中心",
      key: "dataCenter",
      icon: <SettingOutlined />,
      children: [
        {
          label: "内容数据",
          key: "contentData",
        },
        {
          label: "关注者数据",
          key: "otherData",
        },
      ],
    },
    {
      label: "活动中心",
      key: "activityCenter",
      icon: <SettingOutlined />,
      children: [
        {
          label: "创作活动",
          key: "createActivity",
        },
      ],
    },
    {
      label: "帮助中心",
      key: "HelpCenter",
      icon: <SettingOutlined />,
      children: [
        {
          label: "常见问题",
          key: "commonProblem",
        },
      ],
    },
  ];
  return (
    <Sider width={240} className={styles.sideMenu}>
      <div className={styles.avatar}>
        <div>
          <Avatar size={48} icon={<UserOutlined />} />
        </div>
        <h2>作者名字</h2>
      </div>
      <Button type="primary" className={styles.write}>
        <Link to={"/editor"}>写文章</Link>
      </Button>

      <Menu
        className={styles.menu}
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
