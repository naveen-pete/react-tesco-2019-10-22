export const getFormattedDate = timestamp => {
  return new Date(Number(timestamp)).toString().substr(0, 21);
};
