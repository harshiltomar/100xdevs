import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testMatch: ["tests/Login.test.ts"]
});
