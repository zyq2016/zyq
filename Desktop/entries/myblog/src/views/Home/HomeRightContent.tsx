/*
 * @Author: zyq
 * @Date: 2022-05-11 19:54:41
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 15:31:02
 * @FilePath: \myblog\src\views\Home\HomeRightContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Image } from "antd";
import { List, Avatar, Divider, Button } from "antd";
import styles from "./css/HomeRightContent.module.css";
export default function HomeRightContent() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <div className={styles.content}>
      <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      <div className={styles.authorRank}>
        <Divider orientation="left">作者榜</Divider>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        <div className={styles.getMore}>
          <Button type="primary">完整榜单</Button>
        </div>
      </div>
    </div>
  );
}
