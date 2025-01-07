export const FormatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
