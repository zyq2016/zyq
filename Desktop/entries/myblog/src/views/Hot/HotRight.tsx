/*
 * @Author: zyq
 * @Date: 2022-05-14 09:59:31
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-14 12:21:09
 * @FilePath: \myblog\src\views\Hot\HotRight.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Avatar, List } from "antd";
import { ReloadOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./css/HotRight.module.css";
export default function HotRight() {
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
    <div style={{ width: 260, position: "sticky", top: 20 }}>
      <div className={styles.top}>
        <div className={styles.authorParent}>
          <div>
            <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
          </div>
          <h2>作者名字</h2>
        </div>
        <ul className={styles.authorUl}>
          <li>
            <a href="!#">
              <div>1</div>
              <div>沸点</div>
            </a>
          </li>
          <li>
            <a href="!#">
              <div>0</div>
              <div>圈子</div>
            </a>
          </li>
          <li>
            <a href="!#">
              <div>0</div>
              <div>关注</div>
            </a>
          </li>
          <li>
            <a href="!#">
              <div>0</div>
              <div>关注者</div>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rank}>
        <div className={styles.rankTop}>
          <h2>热门话题</h2>
          <span style={{ cursor: "pointer" }}>
            <ReloadOutlined />
            <span style={{ marginLeft: 10 }}>换一换</span>
          </span>
        </div>
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
        <div className={styles.rankBottom}>
          <span>
            查看更多
            <RightOutlined />
          </span>
        </div>
      </div>
    </div>
  );
}
