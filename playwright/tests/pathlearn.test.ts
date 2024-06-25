// Path finder
// basically take any unique property

//@ts-ignore
import {chromium, test} from "@playwright/test";

test('Locators', async ({page}) => {

    await page.goto("http://localhost:3000/63a5f49232531a72a2cbf82d/departments");

    // Identifies using xpath
    const businessLogoxpath = "//img[@alt='Texas A&M Hotel and Conference Center']";
    // by id property
    const imageElement = await page.waitForSelector(businessLogoxpath);

    // Check if the image is loaded
    const imageLoaded = await page.evaluate((element) => {
        return element.complete && element.naturalHeight !== 0;
    }, imageElement);

    if (imageLoaded) {
        console.log('Image is loaded successfully.');
    } else {
        console.log('Image is not loaded.');
    }

    // Close the browser
})
