/*
 * @Author: zyq
 * @Date: 2022-05-11 15:36:40
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-13 20:32:33
 * @FilePath: \myblog\src\router\IndexRouter.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../views/Main";
//首页
import Home from "../views/Home/Home";
import Hot from "../views/Hot/Hot";
import Tag from "../views/Home/Tag/Tag";
import AllTags from "../views/Home/Tag/AllTags";
import MyTag from "../views/Home/Tag/MyTag";
//创作中心
import Composition from "views/Composition/Composition";
import ComHomeContent from "views/Composition/ComHomeContent";
import Editor from "../components/Composition/Editor";
import ComConduct from "../components/Composition/ComConduct";
//课程
import Course from "../views/Course/Course";
//咨询
import Consult from "../views/Consult/Consult";
const IndexRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="hot" element={<Hot />}></Route>
        <Route path="tag" element={<Tag />}>
          <Route path="myTag" element={<MyTag />}></Route>
          <Route path="allTags" element={<AllTags />}></Route>
          <Route index element={<MyTag />}></Route>
        </Route>
        <Route path="course" element={<Course />}></Route>
        <Route path="consult" element={<Consult />}></Route>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="composition" element={<Composition />}>
        <Route path="comHomeContent" element={<ComHomeContent />}></Route>
        <Route path="ComConduct" element={<ComConduct />}></Route>
        <Route index element={<ComHomeContent />}></Route>
      </Route>
      <Route path="editor" element={<Editor />}></Route>
    </Routes>
  </BrowserRouter>
);

export default IndexRouter;
