// Import playwright module
import { test, expect } from "@playwright/test";

import postAPIRecuest from "../../API/test_data/api_requests/POST_API_Request.json";

// Wright a test
test("Создание POST API  запроса изпользуя статический файл в плейрайт тайпскрипт", async ({
  request,
}) => {
  
  //Create POST API Request
  const postAPIResponse = await request.post("/booking", {
    data: postAPIRecuest,
  });
  
  // Print JSON API Response
  const jsonPostAPIResponse = await postAPIResponse.json();
  console.log(
    "POST API Response : " + JSON.stringify(jsonPostAPIResponse, null, 2)
  );
  
  // Validating API Response
  expect(postAPIResponse.status()).toBe(200);
  expect(postAPIResponse.statusText()).toBe("OK");
  expect(postAPIResponse.headers()["content-type"]).toContain(
    "application/json"
  );

  // Validate property/key names
  expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
  expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

  expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

  // Validate API Response body 
  expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPostAPIResponse.booking.firstname).toBe('Vlad');
  expect(jsonPostAPIResponse.booking.lastname).toBe('Playwrigt');

  expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-01-01'); 
  expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-01-03');

});
