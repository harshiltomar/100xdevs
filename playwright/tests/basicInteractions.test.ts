import { expect, test } from "@playwright/test"

test('Basic Test',async ({ page }) => {
    await page.goto("https://www.Lambdatest.com/selinium-playground/simple-form-demo");

    const messageInput = await page.locator("input#user-message");

    await messageInput.scrollIntoViewIfNeeded();
    console.log('Before Entering Data: ', await messageInput.getAttribute("placeholder"));

    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

    console.log('After Entering Data: ', await messageInput.inputValue());

    messageInput.type("Hi Harshil");
});