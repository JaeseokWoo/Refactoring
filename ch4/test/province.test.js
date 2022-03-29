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
  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });
});
