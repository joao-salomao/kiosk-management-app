export const formatTime = (value: string): string => {
  const [hours, minutes] = value.split(":");
  return `${hours}:${minutes}`;
};
