export const formatNumberToGBP = (number: number) => {
  const formatedNumber = number.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return formatedNumber;
};
