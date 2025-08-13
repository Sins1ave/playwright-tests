// Import playwright module
import { test, expect } from "@playwright/test";

// Wright a test
test("Валидация заголовка Web страницы", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.google.com/?gws_rd=ssl");
  await page.waitForTimeout(1000);
  // Search with keywords
  await page.getByRole("button", { name: "Отклонить все" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("combobox", { name: "Найти" }).click();
  await page.waitForTimeout(1000);
  await page
    .getByRole("combobox", { name: "Найти" })
    .fill("playwright by testers talk");
  await page.waitForTimeout(1000);
  await page.getByRole("combobox", { name: "Найти" }).press("Enter");

  // Click on playlist
  await page
    .getByRole("link", {
      name: "Playwright by Testers Talk",
    })
    .first()
    .click();
  // Validate web page title
});
