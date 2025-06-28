import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

let arr: number[]  = [];
Given("array is empty", () => {
  console.log("Array is empty:", arr);
  arr = [];
});

Then("the length of array should be {int}", (expectedLength: number) => {
  console.log("Check array length");
  console.log(
    "Expected length:",
    expectedLength,
    "|  Actual length:",
    arr.length
  );
  expect(arr.length).to.be.equal(expectedLength);
});


When("the array is loaded with element {int},{int},{int}",
  (a: number, b: number, c: number) => {
    console.log(" Loading array with:", a, b, c);
    arr.push(...[a, b, c]);
  }
);
