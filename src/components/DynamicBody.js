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
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { headers, rows, selectedItemData } from "../utils/constants";
import DynamicTable from "./shared/DynamicTable";
import { useSelector } from "react-redux";
import { getQueriesForGroup } from "../api/getQueriesForGroup";
import axios from "axios";
const DynamicBody = () => {
  const [selItem, setSelItem] = useState(null);
  const [queryItems, setQueryItems] = useState([]);
  const [formInputs, setFormInputs] = useState([]);
  const groupId = useSelector((state) => state.group.groupId);
  const handleChange = (event) => {
    console.log("id", event.target.value);
    setSelItem(event.target.value);
  };

  const getComponent = (obj) => {
    switch (obj.filter_type) {
      case "single_value": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography align="right">{obj.label}:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField type="text" size="small" fullWidth></TextField>
              </Grid>
            </Grid>
          </Box>
        );
      }
      case "multi_value": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography align="right">{obj.label}:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  size="small"
                  multiline
                  fullWidth
                  maxRows={4}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        );
      }
      case "date": {
        return (
          <Box sx={{ mb: "5px" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography align="right">{obj.label}:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField fullWidth type="date" size="small"></TextField>
              </Grid>
            </Grid>
          </Box>
        );
      }
      default:
        return null;
    }
  };

  const getDropdownItems = async () => {
    const res = await getQueriesForGroup(groupId);
    console.log("getDropdownItems", res);
    setQueryItems(res);
  };

  const getForm = async () => {
    let res = await axios.get(
      `http://3.28.135.176:8000/reports/query_filters/${selItem}`
    );
    console.log("res in form api", res);
    setFormInputs(res.data.query_filters);
  };

  useEffect(() => {
    console.log("selItem", selItem);
    getDropdownItems();
  }, [groupId]);
  useEffect(() => {
    getForm();
  }, [selItem]);
  return (
    <Box m={2}>
      <Stack direction="row" justifyContent="space-even" minHeight="30vh">
        <Box width="40%">
          <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
            <InputLabel id="demo-simple-select-label">Select Report</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selItem}
              label="Select Report"
              onChange={handleChange}
            >
              {queryItems.map((ele) => (
                <MenuItem value={ele.id}>{ele.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ml: 1 }} width="70%">
          {formInputs.map((ele, index) => {
            return getComponent(ele);
          })}
          <Box sx={{ textAlign: "center" }}>
            <Button
              color="primary"
              size="small"
              variant="contained"
              sx={{ ml: 7 }}
            >
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
