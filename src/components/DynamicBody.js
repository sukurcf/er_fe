import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { default0, headers, rows, selectedItemData } from "../utils/constants";
import DynamicTable from "./shared/DynamicTable";

const DynamicBody = () => {
  const [selItem, setSelItem] = useState(null);

  const handleChange = (event) => {
    setSelItem(event.target.value);
  };

  const getComponent = (obj) => {
    switch (obj.filter_type) {
      case "single_value": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography>{obj.label}:</Typography>
              <TextField type="text" size="small" fullWidth></TextField>
            </Stack>
          </Box>
        );
      }
      case "multi_value": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography>{obj.label}:</Typography>
              <TextField
                size="small"
                multiline
                fullWidth
                maxRows={4}
              ></TextField>
            </Stack>
          </Box>
        );
      }
      case "date": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography>{obj.label}:</Typography>
              <TextField fullWidth type="date" size="small"></TextField>
            </Stack>
          </Box>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Box m={2}>
      <Stack direction="row" justifyContent="space-even">
        <Box width="50%">
          <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selItem}
              label="Select"
              onChange={handleChange}
            >
              {default0.queries.map((ele) => (
                <MenuItem value={ele.id}>{ele.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ml: 1 }}>
          {selectedItemData.query_filters.map((ele, index) => {
            return getComponent(ele);
          })}
          <Box width="100%" sx={{ textAlign: "center" }}>
            <Button size="small" variant="contained" sx={{ ml: 7 }}>
              Search
            </Button>
          </Box>
        </Box>
      </Stack>
      <Divider
        sx={{
          margin: "5px",
          backgroundColor: "gray",
          height: "2px",
          borderRadius: "10px",
        }}
      />

      <DynamicTable rows={rows} headers={headers} />
    </Box>
  );
};

export default DynamicBody;
