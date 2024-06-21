import {chromium, test} from "@playwright/test";


// Chromium is like most core open-source web browser by Google, we make an instance of Chromium, then make a context of it and thne a page of it ( don't know what it mean )

test("Login test demo", async()=> {

    // Gives us a browser instance
    const browser = await chromium.launch({

        // makes it open browser
        headless: false
    });

    // Gives us a new browser context
    const context = await browser.newContext();

    // Gives us a new page in browser context
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")

    // await page.click("text=Login")
    await page.click("'Login'");

    await page.fill("input[name='email']", "harshil20@gmail.com");
    await page.fill("input[name='password']", "Pass123");
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext();

    // creates a new page in incognito to avoid session and cookie transfer
    const page2 = await newContext.newPage();

    const page1= await context.newPage();

    // carry forword the chache and session cookies to a new tab :: you will already be logged in
    page1.goto("Logged in URL");

    await page.waitForTimeout(5000);
})

// 21:35