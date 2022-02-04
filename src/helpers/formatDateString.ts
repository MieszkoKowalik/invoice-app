export const formatDateString = (dateString: string) => {
  const formatedDate = new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatedDate;
};
