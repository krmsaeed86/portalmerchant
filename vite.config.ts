import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: 5100,
      proxy: {
        "/cloud": {
          target: env.REACT_APP_API_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/cloud/, ""),
        },
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      flowbiteReact(),
      VitePWA({
        injectRegister: "auto",
        registerType: "autoUpdate",
        manifest: {
          name: "Taksa APP",
          short_name: "Taksa",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#000000",
          icons: [
            {
              src: "/icon-192x192.svg",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icon-512x512.svg",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  };
});
