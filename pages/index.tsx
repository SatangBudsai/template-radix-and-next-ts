import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker } from '@/components/ui/date-picker'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils'
type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  const [date, setDate] = React.useState<Date>()

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => router.push("/dashboard")} > Dashboard</Button>
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
            initialFocus
            mode="single"
            captionLayout='dropdown-buttons'
            fromYear={1960}
            toYear={2030}
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
      <Calendar captionLayout='dropdown-buttons' className='bg-card border rounded-xl w-fit' />

    </div >
  )
}
export default Home

Home.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <MainLayout>
        {page}
      </MainLayout>
    </RootLayout>
  );
};