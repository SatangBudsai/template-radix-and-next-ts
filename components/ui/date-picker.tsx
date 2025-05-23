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
import { useDataFormat } from "@/hooks/use-date-format"
import dayjs from "dayjs"
import { DayPicker } from "react-day-picker"

type Props = {
    placeholder?: string
    mode: "single"
    classNameInput?: string
}
type CalendarProps = React.ComponentProps<typeof DayPicker>;

const DatePicker = ({ placeholder, classNameInput, ...props }: CalendarProps & Props) => {
    const isDate = (selected: Date | undefined): selected is Date => selected instanceof Date;

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
                    {props.selected && isDate(props.selected) ?
                        useDataFormat(dayjs(props.selected), "DD/MM/YYYY") :
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
export default DatePicker
