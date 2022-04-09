import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";
import AddCardTwoToneIcon from "@mui/icons-material/AddCardTwoTone";
import { useTheme } from "@mui/material/styles";

const Section1 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="div" id="section1">
      <Box
        component="div"
        sx={{
          padding: " 130px",
          borderTop: " 1px solid #ddd;",
        }}
      >
        <Typography variant="h5" sx={{ color: "green" }}>
          Features
        </Typography>
        <Typography variant="h4">
          Everything you need in a modern bank and more.
        </Typography>
      </Box>
      {!matches ? (
        <Box sx={{ padding: "4rem", gap: "4rem" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              gap: "4rem",
            }}
          >
            <Box
              component="img"
              src="img/digital.jpg"
              sx={{ width: "55%", height: "55%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <MonitorOutlinedIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></MonitorOutlinedIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                100% digital bank
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                alias sint quos? Accusantium a fugiat porro reiciendis saepe
                quibusdam debitis ducimus.
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              gap: "4rem",
            }}
          >
            <Box
              component="img"
              src="img/grow.jpg"
              sx={{ width: "55%", height: "55%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <AutoGraphTwoToneIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></AutoGraphTwoToneIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Watch your money grow
              </Typography>
              <Typography variant="body2">
                Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                quibusdam!
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              gap: "4rem",
            }}
          >
            <Box
              component="img"
              src="img/card.jpg"
              sx={{ width: "55%", height: "55%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <AddCardTwoToneIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></AddCardTwoToneIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Free debit card included
              </Typography>
              <Typography variant="body2">
                Quasi, fugit in cumque cupiditate reprehenderit debitis animi
                enim eveniet consequatur odit quam quos possimus assumenda dicta
                fuga inventore ab.
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ padding: "4rem", gap: "4rem" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="img/digital.jpg"
              sx={{ width: "100%", height: "100%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <MonitorOutlinedIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></MonitorOutlinedIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                100% digital bank
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                alias sint quos? Accusantium a fugiat porro reiciendis saepe
                quibusdam debitis ducimus.
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="img/grow.jpg"
              sx={{ width: "100%", height: "100%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <AutoGraphTwoToneIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></AutoGraphTwoToneIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Watch your money grow
              </Typography>
              <Typography variant="body2">
                Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                quibusdam!
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="img/card.jpg"
              sx={{ width: "100%", height: "100%" }}
            ></Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
                gap: "2rem",
              }}
            >
              <AddCardTwoToneIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#9be15d",
                  borderRadius: "8px",
                  fill: "#ffb003",
                }}
              ></AddCardTwoToneIcon>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Free debit card included
              </Typography>
              <Typography variant="body2">
                Quasi, fugit in cumque cupiditate reprehenderit debitis animi
                enim eveniet consequatur odit quam quos possimus assumenda dicta
                fuga inventore ab.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Section1;
