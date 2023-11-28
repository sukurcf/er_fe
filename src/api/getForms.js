import axios from "axios";

export const getQueriesForGroup = async (id) => {
  console.log("getQueriesForGroup");
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_API_URL}/reports/query_filters/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res.data.query_filters);
  return new Promise((resolve, reject) => {
    if (res) {
      resolve(res.data.queries);
    } else {
      reject("Unable to fetch groups");
    }
  });
};
