import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import React, { useCallback, useState } from "react";

import { GridColDef } from "@mui/x-data-grid";
import { selectAllLotss } from "../../redux/slice/lotsSlice";
import { useSelector } from "react-redux";

export default function AdminLotsGrid() {
  const apiRef = useGridApiRef();

  const columns = [
    { field: "lot", headerName: "Lot No.", width: 90, editable: false },
    {
      field: "categoryID",
      headerName: "Category",
      type: "string",
      editable: false,
    },
    {
      field: "name",
      headerName: "Item Name",
      type: "string",
      width: 300,
      editable: false,
    },
    {
      field: "lotsStatus",
      headerName: "Item Status",
      valueOptions: [
        "ComingSoon",
        "InProgress",
        "Finished",
        "Canceled",
        "Pause",
      ],
      width: 150,
      editable: true,
    },
  ];

  const lotss = useSelector(selectAllLotss);
  const [editRowsModel, setEditRowsModel] = useState({});
  console.log(editRowsModel);
  const handleEditRowsModelChange = useCallback((model) => {
    setEditRowsModel(model);
    console.log(model);
  }, []);

  const lotssRows =
    lotss.length !== 0 &&
    lotss.map((lot) => {
      return {
        id: lot.id,
        lot: lot.lot,
        categoryID: lot.auctionItem.categoryID,
        name: lot.auctionItem.name,
        lotsStatus: lot.lotsStatus,
      };
    });

  //console.log(lotssRows);
  //console.log(rows);
  return (
    <div style={{ height: 300, width: "100%" }}>
      {/* {lotssRows && (
        <DataGrid
          rows={lotssRows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
          getRowId={(r) => r.id}
        />
      )} */}
    </div>
  );
}
