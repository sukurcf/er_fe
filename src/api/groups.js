import axios from "axios"

export const getGroups=async ()=>{
  const res=await  axios.get("https://db18-2409-40f0-101d-afa3-9d22-1a-d54e-524a.ngrok-free.app/reports/groups/",{
headers:{
    "Content-Type": "application/json"
}  
})
console.log("res",res)
}