/*
 * @Author: zyq
 * @Date: 2022-05-11 18:38:58
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 14:50:03
 * @FilePath: \myblog\src\views\Course\CourseLeftContent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useState } from "react";
import { Input, Menu, MenuProps, Avatar, Image } from "antd";
import styles from "./css//CourseLeftContent.module.css";
const { Search } = Input;
export default function CourseContent() {
  const [current, setCurrent] = useState("comom");
  const items: MenuProps["items"] = [
    {
      label: "全部",
      key: "comom",
    },
    {
      label: "最新",
      key: "last",
    },
    {
      label: "最热",
      key: "hot",
    },
    {
      label: "价格",
      key: "price",
    },
  ];
  const handleChange: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const onSearch = (value: string) => console.log(value);
  return (
    <div className={styles.HomeContent}>
      <div className={styles.top}>
        <Menu
          className={styles.nav}
          onClick={handleChange}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <ul className={styles.courseList}>
        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.courseItem}>
          <div>
            <div className={styles.courseImgParent}>
              <img
                src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8de725a2865f435382aa44985dd9217f~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
                alt=""
              />
            </div>
            <div className={styles.courseShowParent}>
              <h2 className={styles.courseTitle}>DDD 案例实战课</h2>
              <p>从零开始，手把手教你实现企业级的DDD应用程序</p>
              <div className={styles.otherDiv1}>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <span>神三元</span>
                <span>一些其他信息</span>
              </div>
              <div className={styles.otherDiv2}>
                <span>49.9</span>
                <span>已更新24小节</span>
                <span>2189人购买</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
