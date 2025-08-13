// Import playwright module
import { test, expect } from "@playwright/test";

import postAPIRecuest from "../../API/test_data/api_requests/POST_API_Request.json";

// Wright a test
test("Создание POST API  запроса изпользуя статический файл в плейрайт тайпскрипт", async ({
  request,
}) => {
  const postAPIResponse = await request.post("/booking", {
    data: postAPIRecuest,
  });
  const jsonPostAPIResponse = await postAPIResponse.json();
  console.log(
    "POST API Response : " + JSON.stringify(jsonPostAPIResponse, null, 2)
  );
  expect(postAPIResponse.status()).toBe(200);
  expect(postAPIResponse.statusText()).toBe("OK");
  expect(postAPIResponse.headers()["content-type"]).toContain(
    "application/json"
  );
});
