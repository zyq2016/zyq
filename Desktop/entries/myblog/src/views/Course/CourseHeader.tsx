/*
 * @Author: zyq
 * @Date: 2022-05-11 18:30:44
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 11:07:02
 * @FilePath: \myblog\src\views\Course\CourseHeader.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Menu, MenuProps } from "antd";

export default function HomeHeader() {
  const items: MenuProps["items"] = [
    {
      label: "全部",
      key: "/home",
    },
    {
      label: "后端",
      key: "/hot",
    },
    {
      label: "前端",
      key: "/course",
    },
    {
      label: "Android",
      key: "/live",
    },
    {
      label: "IOS",
      key: "/consult",
    },
    {
      label: "人工智能",
      key: "/activity",
    },
    {
      label: "开发工具",
      key: "/activity1",
    },
    {
      label: "代码人生",
      key: "/activity2",
    },
    {
      label: "阅读",
      key: "/activity3",
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
