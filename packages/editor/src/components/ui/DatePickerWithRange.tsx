import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "@/types/date";

type TypeOnChange = (date: DateRange | undefined) => void;

export function DatePickerWithRange({
  className,
  onChange,
}: Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & { onChange: TypeOnChange }) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const handleChange = (date: DateRange | undefined) => {
    setDate(date);
    onChange && onChange(date);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "yyyy-MM")} - {format(date.to, "yyyy-MM")}
                </>
              ) : (
                format(date.from, "yyyy-MM")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            numberOfMonths={2}
            captionLayout="dropdown"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleChange}
            fromYear={1960}
            toYear={2190}
        />
        </PopoverContent>
      </Popover>
    </div>
  );
}
