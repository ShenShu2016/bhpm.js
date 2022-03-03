import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
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
    console.log("useEffect");
    setRowInfo(statusDialogRowInfo);
  }, [statusDialogRowInfo]);

  console.log("rowInfo", rowInfo);

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
