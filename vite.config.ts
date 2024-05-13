import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    noDiscovery: true,
    include: [
      "jayson",
      "buffer",
      "bn",
      "bn.js",
      "client",
      "browser",
      "lib",
      "jayson/lib/client/browser",
      "rpc-websockets/dist/lib",
      "rpc-websockets/dist/lib/client",
      "@solana/buffer-layout/lib",
      "@solana/buffer-layout/lib/Layout",
      "@solana/buffer-layout",
      "@solana/web3.js",
      "eventemitter3",
      "bs58",
      "events",
      "@ledgerhq",
      "@ledgerhq/errors",
      ".vite/deps/@ledgerhq_errors",
      ".vite/deps"
    ],
  },
});
