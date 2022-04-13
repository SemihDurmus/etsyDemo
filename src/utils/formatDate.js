export const convertToDDMMYYY = (val) => {
  const dateVal = new Date(val);
  let dd = dateVal.getDate();
  let mm = dateVal.getMonth() + 1;
  const yyyy = dateVal.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return dd + "." + mm + "." + yyyy;
};
