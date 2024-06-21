import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testMatch: ["tests/hifive.test.ts"],

    // Open a browser window
    use: {
        headless: false
    },

    reporter: [["dot"], 
    ["json", {
        outputFile: "jsonReports/Report.json"
    }], 
    ["html", {
        open: "always"
    }]
    ]
});
