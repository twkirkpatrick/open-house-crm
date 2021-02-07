import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Analytics = () => {
  return (
    <div id="analytics">
      <Card style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ margin: ".5rem" }}>
          Analytics Module
        </Typography>
        <img
          src="/img/charts.gif"
          alt="Gif of agent forum in action"
          style={{ borderRadius: "5px", boxShadow: "3px 3px 5px" }}
        />
      </Card>
    </div>
  );
};

export default Analytics;
