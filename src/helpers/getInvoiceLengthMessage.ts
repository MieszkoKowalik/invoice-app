export function getInvoiceLenghtMessage(
  length: number,
  longerMessages: boolean
): string {
  let message: string;

  switch (length) {
    case 0:
      message = "No invoices";
      break;
    case 1:
      message = longerMessages
        ? `There is ${length} invoice`
        : `${length} invoice`;
      break;
    default:
      message = longerMessages
        ? `There are ${length} invoices`
        : `${length} invoices`;
  }

  return message;
}
