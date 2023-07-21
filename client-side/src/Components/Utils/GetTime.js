const GetTime = (date) => {
  date = new Date(date);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000;

  if (diff < 86400) {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleString("en-US", options);
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${month}/${day}`;
  }
};

export default GetTime;
