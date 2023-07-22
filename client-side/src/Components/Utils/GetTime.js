const now = new Date();

const isSameDay = (date) => {
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
};

const isYesterday = (date) => {
  return (
    date.getDate() === now.getDate() - 1 &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
};

const GetTime = (date) => {
  date = new Date(date);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeInHours = date.toLocaleString("en-US", options);

  if (isSameDay(date)) {
    return timeInHours;
  } else if (isYesterday(date)) {
    return `yesterday at ${timeInHours}`;
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day} at ${timeInHours}`;
  }
};

export const GetShortTime = (date) => {
  date = new Date(date);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeInHours = date.toLocaleString("en-US", options);

  if (isSameDay(date)) {
    return timeInHours;
  } else if (isYesterday(date)) {
    return `yesterday`;
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day}`;
  }
};

export default GetTime;
