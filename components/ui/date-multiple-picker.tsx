"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Icon } from "@iconify/react"
import { DateFormat } from "@/utils/date-format"
import dayjs from "dayjs"
import { DayPicker } from "react-day-picker"
import { Badge } from "./badge"

type Props = {
    placeholder?: string
    mode: "multiple"
    classNameInput?: string
}
type CalendarProps = React.ComponentProps<typeof DayPicker>;

const DateMultiplePicker = ({ placeholder, classNameInput, ...props }: CalendarProps & Props) => {
    const isMultipleDate = (selected: Date[] | undefined): selected is Date[] => Array.isArray(selected);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className={cn(
                        "flex flex-wrap gap-y-2 justify-start text-sm text-left font-normal border p-2 rounded-xl cursor-pointer",
                        !props.selected && "text-muted-foreground", classNameInput
                    )}
                >
                    <Icon icon="solar:calendar-outline" className="mr-2 h-5 w-5" />
                    {props.selected && isMultipleDate(props.selected) ?
                        props.selected.map((item, index) => (
                            <Badge variant={"secondary"} key={index} className="font-medium">{DateFormat(dayjs(item), "DD/MM/YYYY")}</Badge>
                        )) :
                        <span>{placeholder}</span>}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    {...props}
                />
            </PopoverContent>
        </Popover>
    )
}
export default DateMultiplePicker