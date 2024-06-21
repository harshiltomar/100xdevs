import {chromium, test} from "@playwright/test";


// Chromium is like most core open-source web browser by Google, we make an instance of Chromium, then make a context of it and thne a page of it ( don't know what it mean )

test("Login test demo", async()=> {

    // Gives us a browser instance
    const browser = await chromium.launch();

    // Gives us a new browser context
    const context = await browser.newContext();

    // Gives us a new page in browser context
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")

    await page.click("text=Login")
})