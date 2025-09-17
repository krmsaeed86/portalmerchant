import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import appConfig from "../../app.config";
//import { getNavigate } from "../components/navigationService/navigationService";
// import { fromBinary } from "./fromBinary";
// import { refreshToken } from "./refreshToken";
import { getRefreshPromise } from "./refreshPromise";

export const createBaseQueryWithReauth = (baseUrl: string) => {
  return async (args: any, api: any, extraOptions: any) => {
    let token = localStorage.getItem(appConfig.token);

    const prepareHeaders = (headers: any) => {
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      //const setContentType = headers.get("SetContent-type")?.trim();
      const contentType = headers.get("Content-type")?.trim();

      if (contentType) {
        headers.set("Content-Type", contentType);
      } else {
        // setContentType != "None" &&
        //   headers.set("Content-Type", "application/json");
      }
      // dev http://192.168.156.43:9080
      // stage http://192.168.157.4:9080
      // sandbox http://192.168.157.10:9080
      headers.set(
        "Server-Ip",
        `http://192.168.156.43:9080/cloud/uixmerchant/api`,
      );

      return headers;
    };

    let result = await fetchBaseQuery({ baseUrl, prepareHeaders })(
      args,
      api,
      extraOptions,
    );

    // const isTokenExpired = (token: string) => {
    //   try {
    //     const decoded = fromBinary(token.split(".")[1]);
    //     const payload = JSON.parse(decoded);
    //     const exp = payload?.exp;
    //     if (!exp) return true;
    //     const now = Math.floor(Date.now() / 1000);
    //     return exp < now;
    //   } catch (e) {
    //     return true;
    //   }
    // };

    // console.log("isTokenExpired(token)", token && isTokenExpired(token));
    // isTokenExpired(token ?? '')
    if (
      (result.error && result.error.status === 401) ||
      !token
      //|| isTokenExpired(token)
    ) {
      try {
        // Call the shared refresh token promise
        //console.log('refresh')
        const refreshResult = await getRefreshPromise();
        if (refreshResult.success) {
          //console.log('refresh', refreshResult)
          // Retry original request after refresh
          token = localStorage.getItem(appConfig.token);
          result = await fetchBaseQuery({ baseUrl, prepareHeaders })(
            args,
            api,
            extraOptions,
          );
        } else {
          // Refresh failed, handle logout
          localStorage.clear();
          //getNavigate()("/auth/logout");
        }
      } catch (e) {
        console.log(e);
        // In case refresh promise throws
        localStorage.clear();
        //getNavigate()("/auth/logout");
      }
    }

    return result;
  };
};
