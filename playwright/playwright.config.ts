//@ts-ignore
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testMatch: ["tests/frames.test.ts"],

    // Open a browser window
    use: {
        headless: false,

        // Screenshotting can be on, off, only on faliure
        // in the html opening, we will also have Screenshot and video of turned on / triggered
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },

    // Retry if there is a failure
    retries: 1,

    // Generates a report of the Test
    reporter: [["dot"], 
    ["json", {
        outputFile: "jsonReports/Report.json"
    }], 
    ["html", {
        open: "always"
    }]
    ]
});
