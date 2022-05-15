/*
 * @Author: zyq
 * @Date: 2022-05-12 12:11:11
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 15:29:34
 * @FilePath: \myblog\src\views\Home\Tag\AllTags.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";
import { Input, Menu, MenuProps } from "antd";
import styles from "../css/AllTags.module.css";
export default function AllTags() {
  const [current, setCurrent] = useState("comom");
  const items: MenuProps["items"] = [
    {
      label: "最热",
      key: "hottest",
    },
    {
      label: "最近",
      key: "lastest",
    },
  ];
  const handleChange: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleTag = (e: any) => {
    console.log("click ", e);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Menu
          className={styles.nav}
          onClick={handleChange}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Input
          placeholder="搜索标签"
          onPressEnter={handleTag}
          style={{ width: 200, height: 36, marginLeft: 40 }}
        />
      </div>
      <ul className={styles.tagList}>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemDiv}>
            <div>
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/bac28828a49181c34110.png~tplv-t2oaga2asx-no-mark:200:200:0:0.awebp"
                alt=""
              />
              <h3>前端</h3>
              <p>575677关注 160089文章</p>
            </div>
            <div>
              <button className={styles.subscribeBtn}>关注</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
