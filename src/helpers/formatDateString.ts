export const formatDateString = (input: string | number) => {
  let formatedDate = new Date(input).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  if (formatedDate === "Invalid Date") formatedDate = "";

  return formatedDate;
};
