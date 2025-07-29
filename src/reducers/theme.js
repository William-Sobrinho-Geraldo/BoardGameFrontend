import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../utils/utils";

const initialState = {
  currentTheme: getCookie("selected_theme") || "yellow",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const theme = action.payload;
      state.currentTheme = theme;
      setCookie("selected_theme", theme);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
