/*
 * @Author: zyq
 * @Date: 2022-05-13 10:58:42
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 16:16:59
 * @FilePath: \myblog\src\views\Consult\Consult.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
/*
 * @Author: zyq
 * @Date: 2022-05-11 17:04:55
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 12:31:28
 * @FilePath: \myblog\src\views\Home\Home.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import { Layout } from "antd";
import ConsultHeader from "./ConsultHeader";
import ConsultLeftContent from "./ConsultLeftContent";
import ConsultRightContent from "./ConsultRightContent";
import styles from "./css/Consult.module.css";

export default function Course() {
  return (
    <Layout className="layout">
      <div className={styles.top}>
        <ConsultHeader />
      </div>

      <div className={styles.content}>
        <ConsultLeftContent />
        <ConsultRightContent />
      </div>
    </Layout>
  );
}
