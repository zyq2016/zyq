/*
 * @Author: zyq
 * @Date: 2022-05-13 21:21:06
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-14 12:20:19
 * @FilePath: \myblog\src\views\Hot\HotLeft.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";

import { Menu, MenuProps } from "antd";
import {
  UserSwitchOutlined,
  UsergroupAddOutlined,
  FieldTimeOutlined,
  FireOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styles from "./css/HotLeft.module.css";
export default function HotLeft() {
  const [current, setCurrent] = useState("lastest");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items: MenuProps["items"] = [
    {
      label: "最新",
      key: "lastest",
      icon: <FieldTimeOutlined />,
    },
    {
      label: "热门",
      key: "hotest",
      icon: <FireOutlined />,
    },
    {
      label: "关注",
      key: "star",
      icon: <StarOutlined />,
    },
    {
      label: "我的圈子",
      key: "myCoterie",
      icon: <UserSwitchOutlined />,
    },
    {
      label: "推荐圈子",
      key: "coterie",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: "内推招聘广场",
          key: "conConduct1",
        },
        {
          label: "技术交流圈",
          key: "special1",
        },
        {
          label: "技术大佬交流",
          key: "hot2",
        },
        {
          label: "树洞一下",
          key: "hot3",
        },
        {
          label: "上班摸鱼",
          key: "hot4",
        },
      ],
    },
  ];
  return (
    <div style={{ position: "sticky", top: 20 }}>
      <Menu
        className={styles.menu}
        onClick={onClick}
        defaultOpenKeys={["coterie"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
