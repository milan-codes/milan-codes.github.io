export const formatDate = (date: string | Date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  if (typeof date === "string")
    return new Date(date).toLocaleDateString("en-US", options);
  return date.toLocaleDateString("en-US", options);
};
