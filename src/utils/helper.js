export const convertDate = givenDate => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const date = new Date(givenDate * 1000);
  return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
};

export const sortImage = () => {};

export const formatSize = size => {
  const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let l = 0,
    n = parseInt(size, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return n.toFixed(n >= 10 || l < 1 ? 0 : 1) + " " + units[l];
};
