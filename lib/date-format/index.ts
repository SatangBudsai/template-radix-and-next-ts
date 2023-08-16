import dayjs, { Dayjs } from "dayjs";

export const DateFormat = (date: Dayjs, format: string) => {
    const modifiedDate = dayjs(date).format(format)
    return modifiedDate
}
