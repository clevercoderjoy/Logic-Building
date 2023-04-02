// Ques Link: https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript

/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

// Sol:
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

// Test Cases:
const { assert } = require("chai");

describe("Tests", () => {
    it("Example tests", () => {
        assert.strictEqual(Kata.getVolumeOfCuboid(1, 2, 2), 4);
        assert.strictEqual(Kata.getVolumeOfCuboid(6, 2, 5), 60);
    });
});
