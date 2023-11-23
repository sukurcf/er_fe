import { Box, Grid } from "@mui/material";
import React from "react";
import Categories from "./Sidebar";
import Navbar from "./Navbar";
import DynamicBody from "./DynamicBody";

const HomeLayout = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <Categories />
        </Grid>
        <Grid item xs={10}>
          <DynamicBody />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeLayout;
