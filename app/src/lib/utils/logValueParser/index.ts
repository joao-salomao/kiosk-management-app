export const logValueParser = (value: any): string => {
  if (typeof value == "boolean") {
    return value ? "Yes" : "No";
  }

  return value;
};
