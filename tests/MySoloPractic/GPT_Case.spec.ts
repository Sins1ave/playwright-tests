// Перед запуском убедиться что установлен верный baseURL: process.env. в USE в файле config


import { test, expect } from "@playwright/test";

import postGPTreq from '../../API/test_data/api_requests/GPT_API_Req.json';


test('Мой пет пост запрос', async ({ request }) => {
    const postGPTResponse = await request.post('/posts',{
        data: postGPTreq,
    });
    console.log();

    const jsonGPTResponse = await postGPTResponse.json();
    console.log('POST API GPT Response: ' + JSON.stringify(jsonGPTResponse, null, 2));

    expect(postGPTResponse.status()).toBe(201);
    expect(jsonGPTResponse).toHaveProperty('id');
    


    expect(jsonGPTResponse.title).toBe("Playwright Test Post");
    expect(jsonGPTResponse.body).toBe("This is my first API test in Playwright.");
    expect(jsonGPTResponse.userId).toBeGreaterThan(0)
    






})