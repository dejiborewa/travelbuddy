const matchVariant = (
  option: string,
  options: {
    [key: string]: string;
    default: "";
  }
) => {
  return options[option] || options.default;
};

export default matchVariant;
