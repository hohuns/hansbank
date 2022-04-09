import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import { Box } from "@mui/system";
import DrawerComponent from "./DrawerComponent";
import { useTheme } from "@mui/material/styles";
import ListIcon from "@mui/icons-material/List";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import { Link } from "react-scroll";
import OpenAccountDialog from "../OpenAccount/OpenAccountDialog";
import Slide from "@mui/material/Slide";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true);
  //theme instance
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  // Dialog Process data logic
  const dialogClickHandler = () => {
    setOpen(true);
  };

  const dialogCloseHandler = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <Box
        elevation={10}
        sx={{ backgroundColor: "white", position: "fixed", width: "100%" }}
      >
        <Toolbar>
          {/* logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <IconButton>
                <CreditCardTwoToneIcon
                  sx={{
                    border: "1px solid",
                    backgroundColor: "#5ec576",
                    borderRadius: "3px",
                  }}
                ></CreditCardTwoToneIcon>
                <Typography
                  sx={{
                    ml: "2px",
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  HansBank
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              alignItems: "center",
              padding: "10px 0px",
              hover: "true",
            }}
            component="div"
          >
            {/* link */}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <nav>
                <Box sx={{ display: "flex" }}>
                  <Link
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Typography
                      sx={{
                        marginRight: "20px",
                        cursor: "pointer",
                        color: "#616161",
                      }}
                    >
                      Features
                    </Typography>
                  </Link>
                  <Link
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Typography
                      sx={{
                        marginRight: "20px",
                        cursor: "pointer",
                        color: "#616161",
                      }}
                    >
                      Operations
                    </Typography>
                  </Link>
                  {/* Dropdown Items */}
                  <Link
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Typography
                      aria-controls="basic-menu"
                      aria-haspopup="true"
                      aria-expanded={openMenu ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        marginRight: "20px",
                        cursor: "pointer",
                        color: "#616161",
                      }}
                    >
                      Testimonials
                    </Typography>
                  </Link>
                </Box>
              </nav>
            )}
            {/* Button link */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {matches ? (
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <ListIcon></ListIcon>
                </IconButton>
              ) : (
                <IconButton>
                  <Button
                    variant="outlined"
                    disableElevation
                    color="success"
                    onClick={dialogClickHandler}
                  >
                    Open Account
                  </Button>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
      <OpenAccountDialog
        // selected={JSON.stringify(selected)}
        open={open}
        close={dialogCloseHandler}
        TransitionComponent={Transition}
        keepMounted
      />
    </>
  );
};

export default Navbar;
