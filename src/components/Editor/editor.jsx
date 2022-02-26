import React, { useState, useEffect, useRef } from "react";
import "./editor.scss";
import "axios";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";
import { langs, themes } from "./constants";
import axios from "axios";
// import EditorHeader from "./header";
// import { debounce, isJsonString } from "../../../Utils/utils";
// import EditorFooter from "./footer";
langs.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});
themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

const Editor = ({
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
}) => {
  const [code, setCode] = useState(`import java.io.*;
  import java.util.*;

  public class Main{

      public static void main(String[] args) throws Exception {
          // write your code here
      }

  }`);
  //   const [code, setCode] = useState(`using System;

  // public class Program
  // {
  // 	public static void Main()
  // 	{
  // 		Console.WriteLine("Hello World");
  // 	}
  // }`);
  console.log(code);
  const [lang, setLang] = useState(langs[0]);
  const [theme, setTheme] = useState(themes[3]);
  const [fontSize, setFontSize] = useState(16);
  const [fullScreen, setFullScreen] = useState(false);
  const contestEditorRef = useRef();
  const [inputExt, setInputExt] = useState("");
  const [dataOut, setDataOut] = useState(null);
  const clickHandle = async () => {
    const ClientID = "3fb4c3c2b9e2c9aaed4b4cdf9041e75c";
    const ClientSecret =
      "7edf0dc08a1d0e85f73b87b4c01dc6445f3a9867d860e2425da34e271be1eab0";
    console.log(code.trim());
    let data = await axios.post("/execute", {
      script: code.trim(),
      language: "java",
      versionIndex: "0",
      // language: "csharp",
      // versionIndex: "4",
      stdin: inputExt,
      clientId: ClientID,
      clientSecret: ClientSecret,
    });
    setDataOut(data);
  };
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
            onChange={(e) => setCode(e)}
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

        <button onClick={clickHandle}>Submit</button>
        <div>
          <textarea
            rows="4"
            value={inputExt}
            onChange={(e) => setInputExt(e.target.value)}
          ></textarea>
        </div>
        <div
          style={{
            boxShadow: "inset 0px 2px 15px 0px #000",
            width: "fit-content",
            overflow: "scroll",
          }}
        >
          <code>
            {/* <pre>{JSON.stringify(dataOut, null, 2)}</pre> */}
            <pre
              style={{
                margin: "5px",
              }}
            >
              {dataOut ? dataOut.data.output : "No Output"}
            </pre>
          </code>
        </div>
      </div>
    </>
  );
};

export default Editor;
