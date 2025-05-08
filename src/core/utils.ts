export const debounce = (
  func: (text: string) => {},
  delay: number | undefined
) => {
  let timer: string | number | NodeJS.Timeout | undefined;

  return function (...args: [text: string]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(debounce, args), delay);
  };
};

export const formatEmptyValue = (value: string) => {
  if (value === "" || value === " ") {
    return "N/A";
  } else {
    return value;
  }
};
