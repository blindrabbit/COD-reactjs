import React from "react";
import Footer from "../../components/footer/footer";
import { Barrinha } from "../../components/sidebar";
// import { Barrinha } from "../../components/sidebar";
// não preciso importar mais
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Navbartop } from "../../components/navbartop/navbartest";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(24),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbartop />
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
