import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Grid, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

const OpenAccountDialog = ({ open, close }) => {
  const submitHandler = () => {
    alert("form is submitted..!");
  };

  return (
    <>
      <Dialog open={open} onClose={close} fullWidth="true" maxWidth="sm">
        <DialogTitle sx={{ color: "#5ec576" }}>Open Account</DialogTitle>
        <DialogContent>
          <DialogContentText align="left">
            Please fill out your information
            <Divider />
            <form onSubmit={submitHandler}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <TextField
                    margin="dense"
                    id="id-input"
                    name="Id"
                    label="Id"
                    type="text"
                    placeholder="Please Enter input Id."
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="pw-input"
                    name="pw"
                    label="Password"
                    type="text"
                    placeholder="Please Enter input Password."
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="name-input"
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Please Enter input Name"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="email-input"
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="Please Enter input Email"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
            <Divider />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>close</Button>
          <Button onClick={submitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OpenAccountDialog;
