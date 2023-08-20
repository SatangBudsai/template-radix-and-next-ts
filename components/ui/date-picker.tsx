import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { DateFormat } from "@/utils/date-format";
import dayjs from "dayjs";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

type PopoverInputDateProps = {
    placeholder?: string;
    value?: Date | Date[] | undefined;
    children: React.ReactNode;
};

const Datepicker = (props: PopoverInputDateProps) => {
    const { placeholder, value, children } = props;
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <Icon icon="solar:calendar-outline" className="mr-2 h-5 w-5" />
                    {value && !Array.isArray(value) ? (
                        DateFormat(dayjs(value), "DD/MM/YYYY")
                    ) : value && Array.isArray(value) ? (
                        value.map(item => <Badge>{DateFormat(dayjs(item), "DD/MM/YYYY")}</Badge>)
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0 rounded-xl">
                {children}
            </PopoverContent>
        </Popover>
    );
};