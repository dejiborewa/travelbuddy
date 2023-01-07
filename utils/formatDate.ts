const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-GB").format(date);
};

export default formatDate;
