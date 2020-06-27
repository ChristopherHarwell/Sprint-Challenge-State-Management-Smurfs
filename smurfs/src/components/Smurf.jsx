import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin: "5vh 40vw 5vh 40vw",
      backgroundColor: "#f2ebda"
    },
    title: {
      fontSize: 14,
    },

  });

export const Smurf = (props) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name:
        </Typography>
          <Typography variant="body2" component="p">
              {props.name}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Age:
        </Typography>
          <Typography variant="body2" component="p">
              {props.age}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Height:
        </Typography>
          <Typography variant="body2" component="p">
              {props.height}
          </Typography>
      </CardContent>
    </Card>
  );
};
