/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 00:41:04
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\ChangeLotsStatusDialog.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { updateLotsDetail } from "../../redux/slice/lotsSlice";
import { useDispatch } from "react-redux";

export default function ChangeLotsStatusDialog({
  handleStatusDialogClose,
  statusDialogOpen,
  statusDialogRowInfo,
}) {
  const dispatch = useDispatch();
  const [rowInfo, setRowInfo] = useState(statusDialogRowInfo);

  useEffect(() => {
    setRowInfo(statusDialogRowInfo);
  }, [statusDialogRowInfo]);

  //console.log("rowInfo", rowInfo);

  const handleChangeStatus = async (event) => {
    console.log(event.target.value);
    setRowInfo({ ...statusDialogRowInfo, lotsStatus: event.target.value });
  };
  const handleSubmitChange = async () => {
    const response = await dispatch(
      updateLotsDetail({ id: rowInfo.id, lotsStatus: rowInfo.lotsStatus })
    );
    console.log(response);
    handleStatusDialogClose();
  };
  return (
    <>
      {statusDialogRowInfo && (
        <Dialog
          disableEscapeKeyDown
          open={statusDialogOpen}
          onClose={handleStatusDialogClose}
          sx={{ minWidth: "360" }}
        >
          <DialogTitle>
            Lot: {rowInfo.lot}. {rowInfo.auctionItem.name}
          </DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              {/* <Typography variant="h4">更改状态: </Typography> */}
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  Change Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rowInfo && rowInfo.lotsStatus}
                  label="Status"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={"ComingSoon"}>ComingSoon</MenuItem>
                  <MenuItem value={"InProgress"}>InProgress</MenuItem>
                  <MenuItem value={"Finished"}>Finished</MenuItem>
                  <MenuItem value={"Canceled"}>Canceled</MenuItem>
                  <MenuItem value={"Pause"}>Pause</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleStatusDialogClose}>Cancel</Button>
            <Button onClick={handleSubmitChange}>Ok</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
