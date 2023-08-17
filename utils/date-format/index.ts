import { Dayjs } from "dayjs";

export const DateFormat = (date: Dayjs, format: string) => {
  const isBuddhistEra = true;

  if (isBuddhistEra) {
    if (format.includes("YYYY")) {
      format = format.replace("YYYY", "BBBB");
    } else if (format.includes("YY")) {
      format = format.replace("YY", "BB");
    }
  }

  const modifiedDate = date.format(format);
  return modifiedDate;
};
