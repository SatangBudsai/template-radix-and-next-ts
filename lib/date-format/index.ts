import { Dayjs } from "dayjs";

export const DateFormat = (date: Dayjs, format: string) => {
    const modifiedDate = date.format(format)
    return modifiedDate
}
