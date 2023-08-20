import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { DateFormat } from "@/utils/date-format";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { Calendar } from "./calendar";
import { DayPicker } from "react-day-picker";

type CalendarProps = React.ComponentProps<typeof DayPicker>;
type DatepickerProps = {
    placeholder?: string;
    onSelect?: any
}
const Datepicker = ({ placeholder, onSelect, selected, mode = "single", ...props }: DatepickerProps & CalendarProps) => {
    const isDate = (value: any): value is Date => value instanceof Date;
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !selected && "text-muted-foreground"
                    )}
                >
                    <Icon icon="solar:calendar-outline" className="mr-2 h-5 w-5" />
                    {selected && isDate(selected) ? (
                        DateFormat(dayjs(selected), "DD/MM/YYYY")
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0 rounded-xl">
                <Calendar
                    selected={selected}
                    onSelect={onSelect}
                    {...props}
                />
            </PopoverContent>
        </Popover>
    );
};

export default Datepicker