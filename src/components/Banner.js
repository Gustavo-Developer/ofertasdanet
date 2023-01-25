import * as React from "react";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

function Banner(props) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="a"
        href="#"
        sx={{
          backgroundColor: "#F14C2D",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "auto",
            maxHeight: "300px",
            display: { xs: "none", sm: "block" },
          }}
          image="./banner.png"
        ></CardMedia>
      </CardActionArea>
    </Grid>
  );
}

export default Banner;
