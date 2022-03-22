import { formatNumberToGBP } from "../formatNumberToGBP";

describe("formatNumberToGBP function", () => {
  it("Returns formated number", () => {
    expect(formatNumberToGBP(1999.99)).toBe("£1,999.99");
  });
});
