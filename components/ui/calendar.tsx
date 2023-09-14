"use client";

import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { DateRange, DayPicker, DropdownProps } from "react-day-picker";
import dayjs from "dayjs";
import { useDataFormat } from "@/hooks/use-date-format";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Badge } from "./badge";

const formatCaption = (date: Date) => {
  const y = useDataFormat(dayjs(date), "YYYY");
  const m = dayjs(date).format("MMMM");
  return `${m} ${y}`;
};

const formatYearCaption = (date: Date) => {
  const y = useDataFormat(dayjs(date), "YYYY");
  return `${y}`;
};

const formatMonthCaption = (date: Date) => {
  const m = useDataFormat(dayjs(date), "MMMM");
  return `${m}`;
};

const formatWeekdayName = (date: Date) => {
  const d = useDataFormat(dayjs(date), "dd");
  return `${d}`;
};

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      formatters={{
        formatCaption,
        formatYearCaption,
        formatMonthCaption,
        formatWeekdayName,
      }}
      initialFocus
      fixedWeeks
      fromYear={new Date().getFullYear() - 5}
      toYear={new Date().getFullYear() + 5}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: `text-base font-medium ${props.captionLayout && props.captionLayout !== "buttons" && "hidden"}`,
        caption_dropdowns: "flex",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-72 border-collapse space-y-1",
        head_row: "flex justify-center",
        head_cell:
          "text-muted-foreground rounded-md w-10 font-normal text-[0.8rem]",
        row: "flex justify-center w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "[&:not([disabled])]:bg-primary [&:not([disabled])]:text-primary-foreground [&:not([disabled])]:hover:bg-primary [&:not([disabled])]:hover:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "[&:not([disabled])]:aria-selected:bg-accent [&:not([disabled])]:aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Dropdown: ({ value, onChange, children, ...props }: DropdownProps) => {
          const options = React.Children.toArray(
            children
          ) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
          const selected = options.find((child) => child.props.value === value);
          const handleChange = (value: string) => {
            const changeEvent = {
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(changeEvent);
          };
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                handleChange(value);
              }}
            >
              <SelectTrigger className="mx-1 px-2 focus:ring-0 text-base font-semibold">
                <SelectValue>{selected?.props?.children}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                <ScrollArea className="h-80">
                  {options.map((option, id: number) => (
                    <SelectItem
                      key={`${option.props.value}-${id}`}
                      value={option.props.value?.toString() ?? ""}
                      className="cursor-pointer"
                    >
                      {option.props.children}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
        IconLeft: ({ ...props }) => (
          <Icon icon="lucide:chevron-left" className="h-4 w-4" />
        ),
        IconRight: ({ ...props }) => (
          <Icon icon="lucide:chevron-right" className="h-4 w-4" />
        ),
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
