import React from "react";
import NewsEditor from "./NewsEditor";
import { Button, Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./css/Editor.module.css";
export default function Editor() {
  return (
    <div>
      <div className={styles.top}>
        <div>
          <Input
            bordered={false}
            placeholder="文章标题..."
            style={{ maxWidth: "80%", fontSize: 25 }}
          />
        </div>
        <div>
          <Button>草稿箱</Button>
          <Button style={{ marginLeft: 20 }} type="primary">
            发布
          </Button>
          <div style={{ marginLeft: 20 }}>
            <Avatar size={48} icon={<UserOutlined />} />
          </div>
        </div>
      </div>
      <NewsEditor />
    </div>
  );
}
