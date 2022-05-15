/*
 * @Author: zyq
 * @Date: 2022-05-12 21:43:09
 * @LastEditors: zyq
 * @LastEditTime: 2022-05-12 22:30:52
 * @FilePath: \myblog\src\components\Composition\NewsEditor.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraftjs from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function NewsEditor(props) {
  const [editorState, setEditorState] = useState("");
  useEffect(() => {
    const html = props.content;
    if (html === undefined) {
      return;
    }
    const contentBlock = htmlToDraftjs(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [props.content]);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState) => {
          setEditorState(editorState);
        }}
        onBlur={() => {
          props.getContent(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          );
        }}
      />
    </div>
  );
}
