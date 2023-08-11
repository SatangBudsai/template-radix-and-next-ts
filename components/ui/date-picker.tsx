"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from '@iconify/react';
import { DayPicker } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function DatePicker({ className, classNames, ...props }: CalendarProps) {
    const [date, setDate] = React.useState<Date>()
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                    <Icon icon="solar:calendar-outline" className="mr-2 h-5 w-5" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0 rounded-xl">
                <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={date}
                    onSelect={setDate}
                    fromYear={1960}
                    toYear={2030}
                    className={cn(className)}
                />
            </PopoverContent>
        </Popover>
    )
}
DatePicker.displayName = "DatePicker"

export { DatePicker }