import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material/";
import React, { useState } from "react";

import ChangeLotsStatusDialog from "./ChangeLotsStatusDialog";
import { selectAllLotss } from "../../redux/slice/lotsSlice";
import { useSelector } from "react-redux";

export default function BasicTable() {
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [statusDialogRowInfo, setStatusDialogRowInfo] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const lotss = useSelector(selectAllLotss);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeStatus = ({ lot }) => {
    setStatusDialogRowInfo(lot);
    console.log(lot);
    setStatusDialogOpen(true);
  };

  const handleStatusDialogClose = () => {
    setStatusDialogOpen(false);
    //console.log(event);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {/* <TableCell>id</TableCell> */}
              <TableCell align="right">Lot No.</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Item Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lotss.length !== 0 &&
              lotss
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((lot) => (
                  <TableRow
                    key={lot.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {lot.lot}
                    </TableCell>
                    {/* <TableCell align="right">{lot.id}</TableCell> */}
                    <TableCell align="right">
                      {lot.auctionItem.categoryID}
                    </TableCell>
                    <TableCell align="right">{lot.auctionItem.name}</TableCell>
                    <TableCell align="right">{lot.lotsStatus}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleChangeStatus({ lot })}
                      >
                        Change Status
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={lotss.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {statusDialogRowInfo && (
        <ChangeLotsStatusDialog
          statusDialogOpen={statusDialogOpen}
          handleStatusDialogClose={handleStatusDialogClose}
          statusDialogRowInfo={statusDialogRowInfo}
        />
      )}
    </>
  );
}
