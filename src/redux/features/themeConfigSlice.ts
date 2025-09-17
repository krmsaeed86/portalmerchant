import { createSlice } from "@reduxjs/toolkit";
import themeConfig from "./../../theme.config";

const initialState = {
  menuOpen: localStorage.getItem("menuOpen") || themeConfig.menuOpen,
  deviceType: themeConfig.deviceType,
};

const themeConfigSlice = createSlice({
  name: "themeConfig",
  initialState: initialState,
  reducers: {
    toggleMenu(state, { payload }) {
      payload = payload || state.menuOpen;
      localStorage.setItem("menuOpen", payload);
      state.menuOpen = payload;
    },
    setDeviceType(state, { payload }) {
      state.deviceType = payload;
    },
  },
});

export const { toggleMenu, setDeviceType } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
