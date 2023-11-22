import axios from "axios"

export const getGroups=async ()=>{
  const res=await axios.get( process.env.REACT_APP_BACKEND_API_URL + "/reports/groups/",{
headers:{
    "Content-Type": "application/json"
}
})
console.log(res)
return new Promise((resolve, reject) => {

if (res) {
resolve(res.data.groups)
}
else {
reject ("Unable to fetch groups")
}
})
}