import React, {  useEffect, useState } from "react";
import { Stack } from "@mui/material";

import { getGroups } from "../api/groups";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getGroupId } from "../reduxtoolkit/slices/groupIdSlice";

const Categories = ({ selectedCategory}) => {
const [groups,setGroups]=useState([])

const dispatch =useDispatch()
  const handleGroup=(id)=>{
    dispatch(getGroupId(id))
  }
  
  const getAllGroups=async ()=>{
  const res=await getGroups()
  setGroups(res)

  }
 
  useEffect(()=>{
    getAllGroups()

  },[])
return (
  <Stack
    direction="row"
    sx={{
      border:'1px solid gray',
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {groups.length>0&&groups.map((ele) => (
      <button
        className="category-btn"
        onClick={()=>{handleGroup(ele.id)}}
        style={{
          background: ele.name === selectedCategory && "#FC1503",
        }}
        key={ele.name}
      >
        <span style={{ opacity: ele.name === selectedCategory ? "1" : "0.8" }}>
          {ele.name}
        </span>
      </button>
    ))}
  </Stack>
)
      }
export default Categories;
