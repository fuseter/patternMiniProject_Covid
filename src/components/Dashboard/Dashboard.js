import React, { useState, useEffect, Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { covidApi, fromthecase, getValueProvince } from "../../function/api";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20%",
  },
  cardStyle: {
    backgroundColor: "#2F3438",
    boxShadow: "none",
    borderRadius: 6,
  },
  select: {
    "&:before": {
      borderColor: "#fff",
    },
    "&:after": {
      borderColor: "#fff",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderColor: "var(--galaxy-blue)",
    },
  },
  icon: {
    fill: "#fff",
  },
}));

export default function StickyFooter() {
  const [n, setn] = useState(0);
  const classes = useStyles();
  const [Confirmed, setConfirmed] = useState();
  const [Recovered, setRecovered] = useState();
  const [Hospitalized, setHospitalized] = useState();
  const [Deaths, setDeaths] = useState();
  const [allProvince, setallProvince] = useState([]);
  const [valueProvince, setvalueProvince] = useState("ทั้งประเทศ");
  const [numberPeople, setnumberPeople] = useState();

  console.log("ชื่อจังหวัด => ", valueProvince);
  console.log("ชื่อจังหวัด2 => ", allProvince);

  //ชื่อจังหวัด
  useEffect(() => {
    fromthecase().then((res) => {
      setallProvince(res["Province"]);
    });
  }, []);

  //ค่าจากจังหวัด
  useEffect(() => {
    getValueProvince().then((res) => {
      setnumberPeople(res["Province"][valueProvince]);
    });
  }, [valueProvince]);

  //ทั้งประเทศ
  covidApi()
    .then((res) => {
      setConfirmed(res["Confirmed"]);
      setHospitalized(res["Hospitalized"]);
      setDeaths(res["Deaths"]);
      setRecovered(res["Recovered"]);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl style={{ width: 200 }} className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ color: "#fff" }}
            >
              เลือกตามจังหวัด
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={valueProvince}
              onChange={function handlechange(e) {
                setvalueProvince(e.target.value);
                getValueProvince();
              }}
              style={{ color: "#fff" }}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
              className={classes.select}
            >
              <MenuItem value="ทั้งประเทศ">ทั้งประเทศ</MenuItem>
              {Object.keys(allProvince).map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Grid>

      {valueProvince === "ทั้งประเทศ" ? (
        <Fragment>
          <Grid item xs={12}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#FF3E58" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#fff",
                  margin: "0 70px 0 70px",
                }}
              >
                <Typography variant="h2" component="h2">
                  {Confirmed}
                </Typography>
                <Typography variant="h5" component="p">
                  ผู้ติดเชื้อสะสม
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#ffc700" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" component="h2">
                  {Hospitalized}
                </Typography>
                <Typography variant="h5" component="p">
                  กำลังรักษา
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#039245" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Typography variant="h3" component="h2">
                  {Recovered}
                </Typography>
                <Typography variant="h5" component="p">
                  หายแล้ว
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#d22d36" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Typography variant="h3" component="h2">
                  {Deaths}
                </Typography>
                <Typography variant="h5" component="p">
                  เสียชีวิต
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      ) : (
        <Fragment>
          <Grid item xs={12}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#FF3E58" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#fff",
                  margin: "0 70px 0 70px",
                }}
              >
                <Typography variant="h2" component="h2">
                  {numberPeople}
                </Typography>
                <Typography variant="h5" component="p">
                  ผู้ติดเชื้อสะสม
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#ffc700" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" component="h2">
                  -
                </Typography>
                <Typography variant="h5" component="p">
                  กำลังรักษา
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#039245" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Typography variant="h3" component="h2">
                  -
                </Typography>
                <Typography variant="h5" component="p">
                  หายแล้ว
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              className={classes.cardStyle}
              style={{ backgroundColor: "#d22d36" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <Typography variant="h3" component="h2">
                  -
                </Typography>
                <Typography variant="h5" component="p">
                  เสียชีวิต
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
}
