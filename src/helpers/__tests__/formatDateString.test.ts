import { formatDateString } from "helpers/formatDateString";

describe("formatDateString", () => {
  it("Returns empty string if invalid date passed", () => {
    expect(formatDateString("invalid input")).toBe("");
  });

  it("Returns formated date when date string passed", () => {
    expect(formatDateString("2022-01-10")).toBe("10 Jan 2022");
  });

  it("Returns formated date when date passed in milliseconds", () => {
    expect(formatDateString(1647895835732)).toBe("21 Mar 2022");
  });
});
