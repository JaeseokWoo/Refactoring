const Province = require("../Province");
const sampleProvinceData = require("../sampleProvinceData");
const assert = require("assert");
const { expect } = require("chai");

describe("province", function () {
  let asia;
  this.beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    assert.equal(asia.shortfall, 5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
