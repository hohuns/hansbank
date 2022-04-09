import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-scroll";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <Link to="header" spy={true} smooth={true} offset={50} duration={500}>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Main</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="section1" spy={true} smooth={true} offset={50} duration={500}>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Features</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="section2" spy={true} smooth={true} offset={50} duration={500}>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Operations</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="section3" spy={true} smooth={true} offset={50} duration={500}>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Testimonials</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
