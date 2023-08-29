import * as React from "react"
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid"
import { Box, Checkbox, Pagination, PaginationItem, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import "./style.css"
import { Check, CheckBox } from "@mui/icons-material"

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", flex: 1, headerName: "First name" },
  { field: "lastName", flex: 1, headerName: "Last name" },
  { field: "age", flex: 1, headerName: "Age" },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
]

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 13, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 14, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 15, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 16, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 17, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 19, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 20, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 21, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 22, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 23, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 24, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 25, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 26, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 27, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 28, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 29, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 30, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 31, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 32, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 33, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 34, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 35, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 36, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

export default function Index() {
  const theme = useTheme()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">Table</Typography>
      <Box sx={{ height: "100%" }}>
        <DataGrid
          sx={{
            height: "80vh",
            borderColor: "primary.light",
            "& .MuiDataGrid-sortIcon": {
              opacity: 1,
              color: theme.palette.secondary.main,
            },
            "& .MuiDataGrid-menuIconButton": {
              opacity: 1,
              color: theme.palette.secondary.main
            },
            "& .MuiDataGrid-cell:hover": {
              color: theme.palette.primary.main
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: theme.palette.primary.main,
              color: "#ffffff",
              fontWeight: "bold",
            },
            // ".MuiDataGrid-cellCheckbox" : {
            //   backgroundColor: theme.palette.primary.main,
            // },
            '& .MuiDataGrid-checkboxInput': {
              color: theme.palette.secondary.main, // Replace with your desired color
            },
            
          }}
          rows={rows}
          columns={columns}
          showCellVerticalBorder={true}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          slots={{
            pagination: CustomPagination,
          }}
          checkboxSelection
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "rowEven" : "rowOld"
          }
          disableColumnFilter
        />
      </Box>
    </div>
  )
}
