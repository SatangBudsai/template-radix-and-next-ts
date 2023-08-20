import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar, PopoverDatePicker } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import { DateFormat } from '@/utils/date-format'
import { DateRange } from 'react-day-picker'
import Datepicker from '@/components/ui/date-picker'

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
      <PopoverDatePicker placeholder='Pick a date' value={date}>
        <Calendar
          mode="single"
          captionLayout='dropdown-buttons'
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
        />
      </PopoverDatePicker>
      <PopoverDatePicker placeholder='Pick a date' value={arrDate}>
        <Calendar
          mode="multiple"
          captionLayout='dropdown-buttons'
          min={1}
          max={5}
          selected={arrDate}
          onSelect={setArrDate}
        />
      </PopoverDatePicker>
      <PopoverDatePicker placeholder='Pick a date' value={arrDate}>
        <Calendar
          mode="range"
          defaultMonth={rangeDate?.from}
          captionLayout='dropdown-buttons'
          selected={rangeDate}
          onSelect={setRangeDate}
          numberOfMonths={2}
        />
      </PopoverDatePicker>
      <Datepicker
        mode="single"
        captionLayout='dropdown-buttons'
        selected={date}
        onSelect={setDate}
        defaultMonth={date}
        placeholder='Pick a date'
      />
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