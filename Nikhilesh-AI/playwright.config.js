// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './testcases',
   reporter: [
    ['html'],
    ['allure-playwright']
  ],

  timeout: 40000,
  expect: {
    timeout: 10000,
  },

  use: {
   browserName: 'chromium',
   headless: false,
   trace: 'retain-on-failure'
  },


   


 
});

