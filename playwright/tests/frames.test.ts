//@ts-ignore
import {expect, test} from "@playwright/test";

test("Interact with frames", async ({page}) => {

    await page.goto("https:/Letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames: " + allframes.length);

    const frame = page.frameLocator("#frameUI");
    await frame.locator("input[name='fname']").fill("Harshil");
    await frame.locator("input[name-'Lname']").fill("Tomar");

    // const myFrame = page.frame("firstFr");

    // Check if frame exists to avoid un-necessary code
    //if(myFrame) {

        // await myFrame?.fill("input[name='fname']", "Harshil");
        // await myFrame?.fill("input[name='lname']", "Tomar")

        // // making an expect condition
        // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

        // await page.waitforTimeout(3000);
    //}



})


// Nested frame Handling :

test("Interact with frames", async ({page}) => {

    await page.goto("https:/Letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames: " + allframes.length);

    const frame = page.frameLocator("#frameUI");
    await frame.locator("input[name='fname']").fill("Harshil");
    await frame.locator("input[name-'Lname']").fill("Tomar");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("harshiltomar20@gmail.com");


})
