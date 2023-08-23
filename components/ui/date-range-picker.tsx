"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Icon } from "@iconify/react"
import { DateFormat } from "@/utils/date-format"
import dayjs from "dayjs"
import { DateRange, DayPicker, Matcher } from "react-day-picker"

type Props = {
    placeholder?: string
    mode: "range"
    classNameInput?: string
}
type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function DateRangePicker({ placeholder, classNameInput, ...props }: CalendarProps & Props) {
    const isDateRange = (selected: DateRange | undefined) => (
        selected && !(selected instanceof Date) && !Array.isArray(selected) && selected.from && selected.to
    )

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
                    {props.selected && isDateRange(props.selected) ?
                        <div>{`${DateFormat(dayjs(props.selected?.from), "DD/MM/YYYY")} - ${DateFormat(dayjs(props.selected?.to), "DD/MM/YYYY")}`}</div> :
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
