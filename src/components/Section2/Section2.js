import { Button } from "@mui/material";
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
const Section2 = () => {
  const [buttonState, setButtonState] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonStateHandler = () => {
    setButtonState(0);
  };

  const buttonStateHandler1 = () => {
    setButtonState(1);
  };

  const buttonStateHandler2 = () => {
    setButtonState(2);
  };
  let section2Contents;
  if (buttonState === 0) {
    section2Contents = (
      <Box component="div">
        <Typography variant="h5" sx={{ color: "green" }} mb="20px">
          Tranfser money to anyone, instantly! No fees, no BS.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    );
  } else if (buttonState === 1) {
    section2Contents = (
      <Box component="div">
        <Typography variant="h5" sx={{ color: "green" }} mb="20px">
          Buy a home or make your dreams come true, with instant loans.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
      </Box>
    );
  } else if (buttonState === 2) {
    section2Contents = (
      <Box component="div">
        <Typography variant="h5" sx={{ color: "green" }} mb="20px">
          No longer need your account? No problem! Close it instantly.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Typography>
      </Box>
    );
  }

  let section2Contents2;
  if (buttonState === 0) {
    section2Contents2 = (
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "green" }} mr="40px">
          Tranfser money to anyone, instantly! No fees, no BS.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    );
  } else if (buttonState === 1) {
    section2Contents2 = (
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "green" }} mr="40px">
          Buy a home or make your dreams come true, with instant loans.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
      </Box>
    );
  } else if (buttonState === 2) {
    section2Contents2 = (
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "green" }} mr="40px">
          No longer need your account? No problem! Close it instantly.
        </Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      {!matches ? (
        <Box
          component="div"
          id="section2"
          sx={{
            padding: "130px",
            borderTop: " 1px solid #ddd;",
          }}
        >
          <Box component="div">
            <Typography variant="h5" sx={{ color: "green" }}>
              OPERATIONS
            </Typography>
            <Typography variant="h4">
              Everything as simple as possible, but no simpler.
            </Typography>
          </Box>
          <Box
            variant="div"
            mt="60px"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: " 2.5rem",
              padding: "4rem 4rem",
            }}
          >
            <Box
              variant="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: " 2.5rem",
                padding: "4rem 4rem",
              }}
            >
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler}
              >
                1. Instant Transfers
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler1}
              >
                2. Instant Loans
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler2}
              >
                3. Instant Closing
              </Button>
            </Box>
            <Box
              component="div"
              mt="40px"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: " 2.5rem",
                padding: "4rem 4rem",
              }}
            >
              {section2Contents}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          component="div"
          id="section2"
          sx={{
            padding: "130px",
            borderTop: " 1px solid #ddd;",
          }}
        >
          <Box component="div">
            <Typography variant="h5" sx={{ color: "green" }}>
              OPERATIONS
            </Typography>
            <Typography variant="h4">
              Everything as simple as possible, but no simpler.
            </Typography>
          </Box>
          <Box
            variant="div"
            mt="30px"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: " 2.5rem",
              padding: "4rem 4rem",
              aligncontent: "stretch",
            }}
          >
            <Box
              variant="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: " 2.5rem",
              }}
            >
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler}
                size="small"
              >
                Instant Transfers
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler1}
                size="small"
              >
                Instant Loans
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={buttonStateHandler2}
                size="small"
              >
                Instant Closing
              </Button>
            </Box>
            <Box component="div" mt="40px">
              {section2Contents2}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Section2;
