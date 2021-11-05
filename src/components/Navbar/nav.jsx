import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoName: {
    fontSize: 35,
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  },
  logo_container: {
    padding: 8,
    background: "yellow",
    color: "blue",
  },
}));
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.logo_container}>
            <Typography
              variant="h5"
              component="div"
              className={classes.logoName}
            >
              {"< /> Hustlers"}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
