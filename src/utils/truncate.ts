export const truncate = (text: string, length: number = 65): string => {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length) + "...";
};
