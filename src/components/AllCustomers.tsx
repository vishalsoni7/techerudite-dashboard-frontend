import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, Paper, Typography } from "@mui/material";
import { getAllCustomers } from "../services/authService";
import { PAGE_SIZE_OPTIONS } from "../constant/auth";
import { RegistrationResponseTypes } from "../types/credentials";
import { showErrorToast } from "../utils/toast";

const columns: GridColDef[] = [
  { field: "firstName", headerName: "First name", width: 300 },
  { field: "lastName", headerName: "Last name", width: 300 },
  { field: "role", headerName: "Role", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
];

const AllCustomers = () => {
  const [rows, setRows] = useState([]);
  const [rowCountState, setRowCountState] = useState(0);
  const [loading, setLoading] = useState(true);

  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: PAGE_SIZE_OPTIONS[0],
  });

  const fetchAllData = useCallback(async () => {
    try {
      const res = await getAllCustomers(
        paginationModel.page,
        paginationModel.pageSize
      );

      if (res) {
        const updatedContent = res.customers.map(
          (user: RegistrationResponseTypes) => ({
            ...user,
            id: user._id,
          })
        );

        setRows(updatedContent);
        setRowCountState(res.totalCustomers);
      }
    } catch (error) {
      console.error(error);
      showErrorToast();
    } finally {
      setLoading(false);
    }
  }, [paginationModel.page, paginationModel.pageSize]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: 2,
        height: "100%",
      }}
    >
      {" "}
      <Typography
        sx={{
          marginLeft: 2,
          fontSize: 40,
          fontWeight: 700,
        }}
        variant="h1"
      >
        All Customers
      </Typography>
      <Paper
        sx={{
          marginTop: 2,
          marginBottom: 2,
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <DataGrid
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                page: paginationModel.page - 1,
                pageSize: paginationModel.pageSize,
              },
            },
          }}
          onPaginationModelChange={(newPaginationModel) => {
            setPaginationModel((oldPaginationModel) => ({
              ...oldPaginationModel,
              page: newPaginationModel.page + 1,
              pageSize: newPaginationModel.pageSize,
            }));
          }}
          paginationMode="server"
          columns={columns.map((column) => ({
            ...column,
            sortable: false,
          }))}
          disableColumnMenu
          disableRowSelectionOnClick
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          loading={loading}
          pagination
          rowCount={rowCountState}
        />
      </Paper>
    </Container>
  );
};

export default AllCustomers;
