/*
 * @Author: zyq
 * @Date: 2022-05-11 18:30:44
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 16:19:41
 * @FilePath: \myblog\src\views\Consult\ConsultHeader.tsx
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
      key: "all",
    },
    {
      label: "行业动态",
      key: "hot",
    },
    {
      label: "软件工程",
      key: "course",
    },
    {
      label: "编程语言",
      key: "live",
    },
  ];
  return (
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={["all"]}
      style={{ margin: "0 auto", maxWidth: "960px" }}
    />
  );
}
