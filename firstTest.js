"use strict"


const { Builder, By,} = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

var should = require("chai").should();

async function example(){

 // Start the browser
  let driver = await new Builder().forBrowser("chrome").build();

// set window size
await driver.manage().window().setRect({width: 1900, height: 1400});
// Get the URL
await driver.get("https://strategyinrush.com/")

// Click news BY ID
// await driver.findElement(By.id("menu-item-73864")).click()

// By CSS
// await driver.findElement(By.css("#menu-item-73864 > a")).click()

await driver.findElement(By.css("#menu-item-73864 > a")).click()

//Quit the session
// driver.close();
let checkNewsText = await driver.findElement(By.css("h1")).getText().then(function (value){
    return value;
})

checkNewsText.should.equal("NEWS")
}



example()