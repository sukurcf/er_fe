import { createSlice } from "@reduxjs/toolkit";

const groupIdSlice = createSlice({
  name: "groupId",
  initialState: {
    groupId: null,
  },
  reducers: {
    getGroupId: (state, action) => {
      return { ...state, groupId: action.payload };
    },
  },
});

export const { getGroupId } = groupIdSlice.actions;
export default groupIdSlice.reducer;
