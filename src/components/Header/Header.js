import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Box
      component="div"
      id="header"
      sx={{
        width: "100%",
        height: "90vh",
        ml: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Box component="div">
        <Typography
          sx={{
            fontWeight: "bold",
            color: "gray",
          }}
          variant="h2"
        >
          When <span class="highlight">banking</span> <br />
          meets
          <br />
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "gray",
          }}
          variant="h3"
        >
          <span class="highlight">minimalist</span>
        </Typography>
        <br />
        <Typography
          sx={{
            fontWeight: "bold",
            color: "gray",
          }}
          variant="h4"
        >
          A simpler banking experience for a simpler life.
        </Typography>
        <Link to="section1" spy={true} smooth={true} offset={50} duration={500}>
          <Button
            sx={{
              fontWeight: "bold",
              color: "#5ec576",
              textUnderlineColor: "#5ec576",
              textDecorationLine: "underline",
            }}
          >
            Learn more ↓
          </Button>
        </Link>
      </Box>
      <Box component="img" src="img/hero.png" className="img"></Box>
    </Box>
  );
};

export default Header;
