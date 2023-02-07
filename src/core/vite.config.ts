import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    logLevel: "info",
    testTimeout: 300,
    printLog: true,
    exitOnFail: true,
  },
});
