import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, TextField } from "@mui/material";

const DynamicTable = ({ headers, rows }) => {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Button size="small" variant="contained">
              CSV
            </Button>
            <Button size="small" variant="contained" sx={{ ml: 1 }}>
              Excel
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField size="small" type="email" label="Email"></TextField>
            <Button size="medium" variant="contained" sx={{ ml: 1 }}>
              Send
            </Button>
          </Box>
        </Stack>
      </Box>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#EFEFEF" }}>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header.id}>{header.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header) => (
                  <TableCell key={header.id}>{row[header.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DynamicTable;
