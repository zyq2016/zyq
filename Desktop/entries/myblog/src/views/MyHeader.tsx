/*
 * @Author: zyq
 * @Date: 2022-05-11 18:24:33
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 21:18:36
 * @FilePath: \myblog\src\views\MyHeader.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Menu, MenuProps, Input, message, Dropdown, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import Login from "components/Login";
import styles from "./MyHeader.module.css";

const { Search } = Input;
export default function MyHeader() {
  const items: MenuProps["items"] = [
    {
      label: <Link to={"/home"}>首页</Link>,
      key: "/home",
    },
    {
      label: <Link to={"/hot"}>沸点</Link>,
      key: "/hot",
    },
    {
      label: <Link to={"/course"}>课程</Link>,
      key: "/course",
    },
    {
      label: <Link to={"/home"}>直播</Link>,
      key: "/live",
      disabled: true,
    },
    {
      label: <Link to={"/consult"}>咨询</Link>,
      key: "/consult",
    },
    {
      label: "活动",
      key: "/activity",
      disabled: true,
    },
  ];
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "写文章",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "发沸点",
          key: "2",
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  function handleMenuClick(e: any) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  const onSearch = (value: string) => console.log(value);

  return (
    <div className={styles.header}>
      <div>
        <img
          style={{ height: 21 }}
          src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
          alt=""
        />
      </div>
      <div className={styles.header_div}>
        <Menu mode="horizontal" items={items} />
      </div>

      <div>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 280 }}
        />
      </div>
      <div>
        <Dropdown overlay={menu}>
          <Button
            type="primary"
            style={{ width: 115, height: 36, cursor: "pointer" }}
          >
            <Space>
              <Link to={"composition"} style={{ color: "#ffffff" }}>
                创作中心
              </Link>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className={styles.message}>
        <BellOutlined style={{ fontSize: 20, color: "black" }} />
      </div>
      <div className={styles.message} style={{ marginRight: 24 }}>
        <Login />
        {/* <Avatar size={48} icon={<UserOutlined />} /> */}
      </div>
    </div>
  );
}
