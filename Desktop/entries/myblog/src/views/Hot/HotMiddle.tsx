/*
 * @Author: zyq
 * @Date: 2022-05-14 10:45:44
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-14 12:19:14
 * @FilePath: \myblog\src\views\Hot\HotMiddle.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Input, Button, Avatar } from "antd";
import { FormOutlined, SelectOutlined, LikeOutlined } from "@ant-design/icons";

import styles from "./css/HotMiddle.module.css";
export default function HotMiddle() {
  const { TextArea } = Input;
  const onChange = (e: any) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <div className={styles.top}>
        <div>
          <TextArea
            showCount
            maxLength={1000}
            placeholder="快和朋友一起分享新鲜事！告诉你个小秘密，发布沸点添加圈子和话题会被更多朋友看到哦~"
            style={{ height: 120 }}
            onChange={onChange}
          />
        </div>
        <div className={styles.topOption}>
          <Button type="primary">发布</Button>
        </div>
      </div>
      <div>
        <ul className={styles.hotList}>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemTop}>
              <div className={styles.avatarDiv}>
                <Avatar size={48} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div>
                <h2>作者名字</h2>
                <p>
                  <span>热心网友</span>
                  <span>2天前</span>
                </p>
                <div>内容</div>
              </div>
            </div>
            <div className={styles.hotOption}>
              <div>
                <SelectOutlined />
                <span>分享</span>
              </div>

              <div>
                <FormOutlined />
                <span>评论</span>
              </div>
              <div>
                <LikeOutlined />
                <span>点赞</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
