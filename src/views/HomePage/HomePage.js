import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Dashboard from "../../components/Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#02d667",
  },
  iconSize: {
    fontSize: 30,
  },
  text: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop:"13%",
  },
  container: {},
}));
function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} md={6} className={classes.text}>
            <Typography variant="h2">ตัวเลขผู้ติดเชื้อ</Typography>
            <Typography
              variant="h1"
              style={{ fontWeight: 600, color: "#FF3E58" }}
            >
              COVID-19
            </Typography>
            <Typography variant="h3">ทั้งหมดในประเทศไทย</Typography>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            {/* <Form /> */}
            <Dashboard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
