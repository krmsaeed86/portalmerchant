import { configureStore } from "@reduxjs/toolkit";

import themeConfigSlice from "./features/themeConfigSlice";
//import snackBarHandlerSlice from "./features/snackBarHandlerSlice";
import { authenticateApi } from "./services/authenticateApi";
import { dossiershopApi } from "./services/dossiershopApi";
import { profileApi } from "./services/profileApi";

export const store = configureStore({
  reducer: {
    themeConfig: themeConfigSlice,
    //snackBarHandler: snackBarHandlerSlice,
    [authenticateApi.reducerPath]: authenticateApi.reducer,
    [dossiershopApi.reducerPath]: dossiershopApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },

  //devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([authenticateApi.middleware])
      .concat([dossiershopApi.middleware])
      .concat([profileApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
