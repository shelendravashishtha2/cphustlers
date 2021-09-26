import React, { useState, useEffect, useRef } from "react";
import "./editor.scss";

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";
import { langs, themes } from "./constants";
// import EditorHeader from "./header";
// import { debounce, isJsonString } from "../../../Utils/utils";
// import EditorFooter from "./footer";
langs.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});
themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

function Editor({
  showHeader = true,
  data,
  uuid,
  showFooter = true,
  submittedCode,
  allowFullScreen = true,
  readOnlyMode = false,
  isNavBar,
  contestId,
  batchId,
}) {
  const [code, setCode] = useState(`import java.io.*;
  import java.util.*;
  
  public class Main{
              
      public static void main(String[] args) throws Exception {
          // write your code here
      }
              
  }`);
  console.log(code);
  const [lang, setLang] = useState(langs[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [fontSize, setFontSize] = useState(16);
  const [fullScreen, setFullScreen] = useState(false);
  const contestEditorRef = useRef();

  const handleEscape = (e) => {
    if (e.key == "Escape") {
      setFullScreen(false);
    }
  };

  return (
    <>
      <div
        // onContextMenu={contestId ? handleRightClick : undefined}
        // onContextMenu={handleRightClick}
        ref={contestEditorRef}
        className={["editor_container", fullScreen ? "editor_full" : ""].join(
          " "
        )}
        onKeyDown={handleEscape}
      >
        {/* {showHeader ? <EditorHeader {...editorHeaderProps} /> : null} */}
        <div className="editor_wrap">
          <AceEditor
            style={{
              width: "auto",
            }}
            editorProps={{ $blockScrolling: Infinity }}
            commands={
              contestId
                ? [
                    {
                      // commands is array of key bindings.
                      name: "pastline", //name for the key binding.
                      bindKey: {
                        win: "ctrl-c|ctrl-v|ctrl-x|ctrl-shift-v|shift-del|shift-f10",
                        mac: "Command-V|Command-C|Command-X",
                      }, //key combination used for the command.
                      exec: function (editor) {
                        const editorEvents = [
                          "dragenter",
                          "dragover",
                          "dragend",
                          "dragstart",
                          "dragleave",
                          "drop",
                        ];
                        for (const events of editorEvents) {
                          editor.container.addEventListener(
                            events,
                            function (e) {
                              e.stopPropagation();
                            },
                            true
                          );
                        }
                      },
                    },
                  ]
                : undefined
            }
            placeholder="Write your code here..."
            mode={lang}
            theme={theme}
            name="code-editor"
            // onChange={debounce(updateCode, 400)}
            onChange={(e) => {
              setCode(e);
              console.log(code);
            }}
            fontSize={fontSize}
            showPrintMargin={true}
            showGutter={true}
            readOnly={readOnlyMode}
            highlightActiveLine={true}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 4,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Editor;
