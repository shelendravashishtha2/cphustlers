import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import "./App.css";
import Editor from "./components/Editor/editor";
import Nav from "./components/Navbar/nav";
import { theme } from "./theme/theme";
const useStyle = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "100vh",
  },
  detail: {
    height: "100%",
    width: "47%",
    background: "#000",
  },
  editor: {
    height: "100%",
    width: "53%",
    background: "#aaa",
  },
});
let App = () => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.detail}></Box>
        <Box className={styles.editor}>
          <Editor />
        </Box>
      </Box>
    </>
  );
};

export default App;
