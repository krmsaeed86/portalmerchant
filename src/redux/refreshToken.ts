import appConfig from "../../app.config";
// import { fromBinary } from "./fromBinary";
import { jwtDecode } from "jwt-decode";

// Define the expected response shape for the refresh token API
interface RefreshTokenResponse {
  token: string;
  tokenRefresh: string;
}

export const refreshToken = async (): Promise<{ success: boolean }> => {
  const tokenRef = localStorage.getItem(appConfig.tokenRef);
  const token = localStorage.getItem(appConfig.token);

  if (!tokenRef) {
    return { success: false };
  }

  // // Decode the token reference part
  // const tokenParts = tokenRef.split(".");

  // if (tokenParts.length < 2) {
  //   return { success: false };
  // }

  // const decodedRef = fromBinary(tokenParts[1]);
  // let parsedRef: { userTS: string; userTTS: string };

  // try {
  //   parsedRef = JSON.parse(decodedRef);
  // } catch (error) {
  //   return { success: false };
  // }

  // const { userTS, userTTS } = parsedRef;

  interface IParsedRef {
    userTS: string;
    userTTS: string;
  }
  const parsedRef: IParsedRef = jwtDecode<IParsedRef>(tokenRef);

  const { userTS, userTTS } = parsedRef;

  try {
    const response = await fetch(
      "/cloud/uixmerchant/api/authenticate/re-login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Server-Ip": `http://192.168.156.43:9080/cloud/uixmerchant/api`,
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ts: userTS,
          tts: userTTS,
        }),
      },
    );

    if (response.ok) {
      const data: RefreshTokenResponse = await response.json();

      // Save new tokens
      localStorage.setItem(appConfig.token, data.token);
      localStorage.setItem(appConfig.tokenRef, data.tokenRefresh);

      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
