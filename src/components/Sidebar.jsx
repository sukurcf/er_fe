import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";

// import { groups } from "../utils/constants";
import { getGroups } from "../api/groups";
import axios from "axios";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
const [groups,setGroups]=useState([])

 // const handleGroup =()=>{
  //   fetch(`https://4d0d-2405-201-c008-d848-80ef-c5ee-d3a9-1177.ngrok-free.app/reports/queries_for_group_id/0`, {
  //   headers: {
  //     'Accept': 'application/json',
  //     'ngrok-skip-browser-warning': 'ssss',
  //     'User-Agent': 'custom'
  //   },
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
  // }


  const handleGroup=async(id)=>{
   const res=await axios.get(`https://2093-2405-201-c008-d848-80ef-c5ee-d3a9-1177.ngrok-free.app/reports/queries_for_group_id/0`,{
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      'ngrok-skip-browser-warning': "true",
          'User-Agent': 'custom'
    }
   })
   console.log("res",res)
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
      // overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {groups.length>0&&groups.map((category) => (
      <button
        className="category-btn"
        onClick={()=>{handleGroup(category.id)}}
        style={{
          background: category.name === selectedCategory && "#FC1503",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)
      }
export default Categories;
