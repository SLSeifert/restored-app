import CONTENT from "../../shared/CONTENT";

const isCurrentWeek = (item) => {
  const today = new Date();
  const year = today.getFullYear();
  const [startStr, endStr] = item.date.split(" - ");
  const startDate = new Date(`${startStr} ${year}`);
  const endDate = new Date(`${endStr} ${year}`);
  return today >= startDate && today <= endDate;
};

export const selectAllContent = () => CONTENT;

export const currentContent = () => CONTENT.find(isCurrentWeek);

export const notCurrentContent = () => CONTENT.filter((item) => !isCurrentWeek(item));
