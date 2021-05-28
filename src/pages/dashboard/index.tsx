import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SidebarDashboard from "../../components/sidebar";

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
      {/* <CssBaseline /> */}
      <SidebarDashboard />
      {/* <Navbartop /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
