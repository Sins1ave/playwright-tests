import { test, expect } from "@playwright/test";

test("Проверка неудачной авторизации GitHub", async ({ page }) => {
  await test.step("Навигация к URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Ввод Логина и Пароля", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .click();
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("Indus");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("rrr");
  });

  await test.step("Проверка сообщения о ошибке", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect username or password."
    );
  });
});
