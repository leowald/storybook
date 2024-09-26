import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  /*server: {
    host: "0.0.0.0",
    port: 5173, // This is the port which we will use in docker
    open: true,
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  }, */
});
