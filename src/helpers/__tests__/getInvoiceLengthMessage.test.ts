import { getInvoiceLenghtMessage } from "helpers/getInvoiceLengthMessage";

describe("getInvoiceLengthMessage function", () => {
  it("Returns proper message when there are no invoices", () => {
    expect(getInvoiceLenghtMessage(0, false)).toBe("No invoices");
  });

  it("Returns proper message when there is 1 invoice", () => {
    expect(getInvoiceLenghtMessage(1, false)).toBe("1 invoice");
  });

  it("Returns proper long message when there is 1 invoice", () => {
    expect(getInvoiceLenghtMessage(1, true)).toBe("There is 1 invoice");
  });

  it("Returns proper message when there are 2 or more invoices", () => {
    expect(getInvoiceLenghtMessage(2, false)).toBe("2 invoices");
  });

  it("Returns proper long message when there are 2 or more invoices", () => {
    expect(getInvoiceLenghtMessage(2, true)).toBe("There are 2 invoices");
  });
});
