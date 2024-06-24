// import { expect, test } from "@playwright/test"

// test('Interactions with Input',async ({ page }) => {
//     await page.goto("https://www.Lambdatest.com/selinium-playground/simple-form-demo");

//     const messageInput = await page.locator("input#user-message");

//     await messageInput.scrollIntoViewIfNeeded();
//     console.log('Before Entering Data: ', await messageInput.getAttribute("placeholder"));

//     expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

//     console.log('After Entering Data: ', await messageInput.inputValue());

//     messageInput.type("Hi Harshil");
// });

//@ts-ignore
import { expect, test } from "@playwright/test"

// test('Sum',async ({ page }) => {
//     await page.goto("https://www.Lambdatest.com/selinium-playground/simple-form-demo");

//     const sum1Input = await page.locator("#sum1");
//     const sum2Input = await page.locator("#sum2");

//     const getValuesBtn = page.locator("//button[text()= 'Get values']")

//     let num1= 121;
//     let num2= 546;


//     // fill clears the value and inputs this value
//     // type is like go char by char; just like writing in a copy
//     await sum1Input.type("" + num1);
//     await sum2Input.type("" + num2);

//     await getValuesBtn.click();

//     const result = page.locator("#addmessage");

//     console.log(await result.textContent());

//     // check the value
//     let expectedResult = num1 + num2;

//     // check if the value matches the value
//     expect(result).toHaveText("" + expectedResult);
// });

test("Checkbox", async ({page}) => {

    await page.goto("https://www.Lambdatest.com/selinium-playground/simple-form-demo");
    const singleCheckbox = await page.locator("id=isAgeSelected");

    // we can also use the .click but .check is recommended for checkbx
    expect(singleCheckbox).not.tobeChecked();
    await singleCheckbox.check();
})