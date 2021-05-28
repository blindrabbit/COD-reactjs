import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SidebarDashboard from "../../components/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      {/* <CssBaseline /> */}
      <SidebarDashboard />
      <Content
        initial={{ marginLeft: 200 }}
        animate={{ marginLeft: collapsed ? 64 : 168 }}
      >
        <h1>Placeholder</h1>
      </Content>
      {/* <Navbartop /> */}
      {/* <Footer /> */}
    </>
  );
}

const Content = styled(motion.div)`
  display: flex;
  background: white;
  height: 120px;
  width: 100%;
  justify-content: center;
  border-width: 25px;
  border-color: red;
`;

export default Dashboard;
