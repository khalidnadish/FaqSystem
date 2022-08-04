import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    margin: "0 10px !important",
    width: "unset",
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
};
