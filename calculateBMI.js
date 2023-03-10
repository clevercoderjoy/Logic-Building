// Ques Link: https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// Sol:
const bmi = (weight, height) => {
    const bmiVal = (weight / (height * height));
    if (bmiVal <= 18.5) {
        return "Underweight";
    } else if (bmiVal <= 25.0) {
        return "Normal";
    } else if (bmiVal <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(bmi(80, 1.80), "Normal");
    });
});