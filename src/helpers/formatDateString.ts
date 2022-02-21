export const formatDateString = (input: string | number) => {
  const formatedDate = new Date(input).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatedDate;
};
