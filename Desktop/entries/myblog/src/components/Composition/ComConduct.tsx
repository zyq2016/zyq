/*
 * @Author: zyq
 * @Date: 2022-05-13 09:41:17
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 10:40:22
 * @FilePath: \myblog\src\components\Composition\ComConduct.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Menu, MenuProps, Input } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./css/ComConduct.module.css";
export default function ComContent() {
  const [current, setCurrent] = React.useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "文章",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "草稿箱",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
  ];
  const items2: MenuProps["items"] = [
    {
      label: "全部",
      key: "all",
      icon: <MailOutlined />,
    },
    {
      label: "已发布",
      key: "published",
      icon: <AppstoreOutlined />,
    },
    {
      label: "审核中",
      key: "review",
      icon: <AppstoreOutlined />,
    },
    {
      label: "未通过",
      key: "notPass",
      icon: <AppstoreOutlined />,
    },
  ];
  return (
    <div>
      <header className={styles.top}>
        <div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <div>
          <Input placeholder="请输入标题的关键字" />
        </div>
      </header>
      <section>
        <div className={styles.menu}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items2}
          />
        </div>
        <ul className={styles.articleList}>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
          <li>
            <div className={styles.articleParent}>
              <h2 className={styles.acticleTitle}>文章的标题</h2>
              <div className={styles.articleOption}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="操作"
                    icon={<SettingOutlined />}
                  >
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                      编辑
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                      删除
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </div>
            <div className={styles.articleShow}>
              <span>2020-05-12 09:46</span>
              <span>106展现·</span>
              <span>4阅读·</span>
              <span>0点赞·</span>
              <span>0评论·</span>
              <span>0收藏</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
