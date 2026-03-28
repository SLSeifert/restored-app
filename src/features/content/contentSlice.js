import CONTENT from "../../shared/CONTENT";

export const selectAllContent = () => {
  return CONTENT;
};

export const currentContent = () => {
  const today = new Date();
  return CONTENT.find((item) => {
    const [startStr, endStr] = item.date.split(" - ");
    const year = today.getFullYear();
    const startDate = new Date(`${startStr} ${year}`);
    const endDate = new Date(`${endStr} ${year}`);
    return today >= startDate && today <= endDate;
  });
};
