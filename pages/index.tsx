import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar, InputDate } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import { DateFormat } from '@/utils/date-format'
import { DateRange } from 'react-day-picker'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>()
  const [arrDate, setArrDate] = useState<Date[] | undefined>()
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>()

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => router.push("/dashboard")} >Dashboard</Button>
      <Calendar captionLayout='buttons' className='bg-card border rounded-xl w-fit' />
      <InputDate placeholder='Pick a date' selected={date}>
        <Calendar
          mode="single"
          captionLayout='dropdown-buttons'
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
        />
      </InputDate>
      <InputDate placeholder='Pick a date' selected={arrDate}>
        <Calendar
          mode="multiple"
          captionLayout='dropdown-buttons'
          min={1}
          selected={arrDate}
          onSelect={setArrDate}
        />
      </InputDate>
      <InputDate placeholder='Pick a date' selected={rangeDate}>
        <Calendar
          mode="range"
          defaultMonth={rangeDate?.from}
          captionLayout='dropdown-buttons'
          selected={rangeDate}
          onSelect={setRangeDate}
          numberOfMonths={2}
        />
      </InputDate>
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