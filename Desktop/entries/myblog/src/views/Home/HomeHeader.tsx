/*
 * @Author: zyq
 * @Date: 2022-05-11 18:30:44
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 12:36:50
 * @FilePath: \myblog\src\views\Home\HomeHeader.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Menu, MenuProps } from "antd";

export default function HomeHeader() {
  const items: MenuProps["items"] = [
    {
      label: "综合",
      key: "/home",
    },
    {
      label: "关注",
      key: "/hot",
    },
    {
      label: "后端",
      key: "/course",
    },
    {
      label: "前端",
      key: "/live",
    },
    {
      label: "Android",
      key: "/consult",
    },
    {
      label: "人工智能",
      key: "/activity",
    },
  ];
  return (
    <Menu
      mode="horizontal"
      items={items}
      style={{ margin: "0 auto", maxWidth: "960px" }}
    />
  );
}
