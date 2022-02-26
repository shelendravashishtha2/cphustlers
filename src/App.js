import { Container, Tab, Tabs, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box, style } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/editor";
import Nav from "./components/Navbar/nav";
import { theme } from "./theme/theme";
// const useStyle = makeStyles({
//   container: {
//     display: "flex",
//     width: "100%",
//     height: "100vh",
//   },
//   detail: {
//     height: "100%",
//     width: "100%",
//     display: "flex",
//   },
//   editor: {
//     height: "100%",
//     width: "53%",
//     background: "#aaa",
//   },
//   main_detail: {
//     height: "100%",
//     width: "100%",
//   },
//   tab_container: {
//     width: "100%",
//     height: "50px",
//     display: "flex",
//     justifyContent: "center",
//   },
// });
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

let App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    setValue(newValue);
  };
  // const styles = useStyle();
  return (
    <>
      <div className="solve-page">
        <div className="question-content">
          <div className="tab-container">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Question" />
              <Tab label="Solution" />
              <Tab label="Discussion" />
            </Tabs>
          </div>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
        <div className="editor-container">
          <Editor />
        </div>
      </div>
      {/* <Nav />
      <Box
        sx={{
          margin: "auto",
          marginTop: "60px",
          display: "flex",
          width: "80%",
          border: "1px solid #000",
          minHeight: "768px",
        }}
      >
        <Box
          sx={{
            minHeight: "768px",
            overflowX: "hidden",
            width: "70%",
            border: "1px solid red",
          }}
        >
          <Box
            sx={{
              height: "100px",
              overflow: "scroll",
              width: "400%",
              border: "1px solid orange",
            }}
          ></Box>
        </Box>
        <Box
          sx={{ minHeight: "768px", width: "30%", border: "1px solid blue" }}
        ></Box>
      </Box> */}
    </>
  );
};

export default App;
