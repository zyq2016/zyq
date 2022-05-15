/*
 * @Author: zyq
 * @Date: 2022-05-12 12:10:01
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 20:37:42
 * @FilePath: \myblog\src\views\Home\Tag\MyTag.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import styles from "../css/AllTags.module.css";
export default function MyTag() {
  return (
    <div>
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
      </ul>
    </div>
  );
}
