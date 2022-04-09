import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DesktopCategories from "./DesktopCategories";

const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -23 }}>
      {/* Featured Product */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: "100%", lg: "40%" } }}
            component="img"
            src="images/card-lazy.jpg"
          ></Box>
          <Box sx={{ paddingLeft: "10px" }}>
            <Typography
              sx={{ fontWeight: "bold", marginBottom: "5px" }}
              variant="h6"
            >
              Minimalist Card
            </Typography>
            <Typography sx={{ marginBottom: "3px" }}>
              Quickly apply for the minimalist Card
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "green",
              }}
              variant="h7"
            >
              Click button to apply..!
            </Typography>
            <br />
            <Button variant="outlined" size="medium">
              Apply now
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: "100%", lg: "40%" } }}
            component="img"
            src="images/digital-lazy.jpg"
          ></Box>
          <Box sx={{ paddingLeft: "10px" }}>
            <Typography
              sx={{ fontWeight: "bold", marginBottom: "5px" }}
              variant="h6"
            >
              Minimalist Card
            </Typography>
            <Typography sx={{ marginBottom: "3px" }}>
              Quickly apply for the minimalist Card
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "green",
              }}
              variant="h7"
            >
              Click button to apply..!
            </Typography>
            <br />
            <Button variant="outlined" size="medium">
              Apply now
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* DesktopCategories */}
      <DesktopCategories></DesktopCategories>
      {/* Product list */}
    </Box>
  );
};

export default ProductContainer;
